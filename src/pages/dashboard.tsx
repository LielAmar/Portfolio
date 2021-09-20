import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { AuthContext  } from "@context/AuthContext";
import DashboardHeader from "@components/DashboardHeader/DashboardHeader";
import Sidebar from "@components/Sidebar/Siderbar";
import SidebarMenu from "@components/Sidebar/SidebarMenu/SidebarMenu";
import SidebarItem from "@components/Sidebar/SidebarMenu/SidebarItems/SidebarItem/SidebarItem";
import SidebarItems from "@components/Sidebar/SidebarMenu/SidebarItems/SidebarItems";

import { __name__ } from "@config/global";
import DashboardAdmins from "@components/DashboardPages/DashboardAdmins/DashboardAdmins";
import DashboardTracker from "@components/DashboardPages/DashboardTracker/DashboardTracker";

enum DashboardPages {
  PROFILE,
  SETTINGS,
  ADMINS,
  TRACKER
}

const authPage = () => {
  const router = useRouter();

  const { user, loading } = useContext(AuthContext);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [dashboardPage, setDashboardPage] = useState<DashboardPages>(DashboardPages.PROFILE);

  // If at some point the user doesn't exists (not logged in) and we are not loading anymore,
  // we want to redirect the user to /login instead of staying in the dashboard page
  useEffect(() => {
    if(!user && !loading)
      router.push("/login");
  }, [user, loading]);


  const toggleMenu = () => setMenuActive(!menuActive);


  return (
    <>
      <Head>          
        {/* Facebook Open Graph Tags */}
        <meta property="og:url"                content="https://www.lielamar.com/dashboard" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Liel Amar - Dashboard" />
        <meta property="og:description"        content="Liel Amar - Dashboard with your account" />
        <meta property="og:image"              content="/favicon.png" />
        
        {/* Twitter Cards Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iamlielamar" />
        <meta name="twitter:creator" content="@iamlielamar" />
      </Head>


      <Layout title={ `${__name__} | Dashboard` } description={ `Liel Amar's Portfolio Website - Dashboard page` }>
        <DashboardHeader withSearchBar={ false } menuClick={ toggleMenu } pfpClick={ () => console.log("pfp clicked!") } />

        <Sidebar active={ menuActive } setActive={ setMenuActive } title={ `Hello, ${ user && user.displayName }!` }>
          <SidebarMenu>
            <SidebarItems title="Account">
              <SidebarItem title="Profile" iconSrc="/svgs/feather/user.svg" active={ false } onClick={ () => {} } />
              <SidebarItem title="Settings" iconSrc="/svgs/feather/settings.svg" active={ false } onClick={ () => {} } />
            </SidebarItems>

            { user && user.isAdmin && <SidebarItems title="Admin">
              <SidebarItem title="Admins" iconSrc="/svgs/feather/user-plus.svg" active={ true } onClick={ () => { setDashboardPage(DashboardPages.ADMINS); setMenuActive(false); } } />
              <SidebarItem title="Tracker" iconSrc="/svgs/feather/compass.svg" active={ true } onClick={ () => { setDashboardPage(DashboardPages.TRACKER); setMenuActive(false); } } />
            </SidebarItems> }

          </SidebarMenu>

          <SidebarItems title="">
            <SidebarItem title="Close" iconSrc="/svgs/feather/x.svg" active={ true } onClick={ () => setMenuActive(false) } />
            <SidebarItem title="Logout" iconSrc="/svgs/feather/log-out.svg" active={ true } onClick={ () => { router.push("/logout"); } } />
          </SidebarItems>
        </Sidebar>

        {/* { dashboardPage === DashboardPages.PROFILE && <DashboardProfile/>} */}
        {/* { dashboardPage === DashboardPages.SETTINGS && <DashboardProfile/>} */}
        { dashboardPage === DashboardPages.ADMINS && <DashboardAdmins user={ user }/> }
        { dashboardPage === DashboardPages.TRACKER && <DashboardTracker user={ user }/>}
      </Layout>
    </>
  );
}

export default authPage;