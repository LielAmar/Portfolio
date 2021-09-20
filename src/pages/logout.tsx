import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext  } from "@context/AuthContext";

import { __name__ } from "@config/global";

const authPage = () => {
  const router = useRouter();
  const { user, logout, loading } = useContext(AuthContext);

  useEffect(() => {
    if(!loading) {
      if(user)
        logout();
      
      router.push("/login");
    }
  }, [user, loading]);

  return <></>;
}

export default authPage;