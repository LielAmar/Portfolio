import firebase from "firebase";
import { useState } from "react";
import { useRouter } from "next/router";

import { RoleUser } from "@context/AuthContext";

import styles from "./DashboardAdmins.module.css";
import dashboardStyles from "../Dashboard.module.css";

interface props {
  user: RoleUser | null
}

const DashboardAdmins: React.FC<props> = ({ user }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [addAdminValue, setAddAdminValue] = useState("");
  const [addAdminError, setAddAdminError] = useState("");
  const [addAdminSuccess, setAddAdminSuccess] = useState("");

  const [removeAdminValue, setRemoveAdminValue] = useState("");
  const [removeAdminError, setRemoveAdminError] = useState("");
  const [removeAdminSuccess, setRemoveAdminSuccess] = useState("");

  
  const addAdmin = async () => {
    if(!user)
      return router.push("/login");

    setAddAdminSuccess("");
    setAddAdminError("");

    if(!user.isAdmin)
      return setAddAdminError("You don't have permissions to do that!");

    if(!/^\S+@\S+\.\S+$/.test(addAdminValue))
      return setAddAdminError("Invalid email address!");

    setLoading(true);
    const addAdmin = firebase.functions().httpsCallable("addAdmin");
    const result = await addAdmin({ executor: user?.uid, email: addAdminValue });
    setLoading(false);
    
    if(result.data.status !== 200)
      return setAddAdminError(result.data.message);

    setAddAdminSuccess(result.data.message);
  }

  const removeAdmin = async () => {
    if(!user)
      return router.push("/login");

    if(!user.isAdmin) {
      setRemoveAdminSuccess("");
      return setRemoveAdminError("You don't have permissions to do that!");
    }

    if(!/^\S+@\S+\.\S+$/.test(removeAdminValue)) {
      setRemoveAdminSuccess("");
      return setRemoveAdminError("Invalid email address!");
    }

    setLoading(true);
    const removeAdmin = firebase.functions().httpsCallable("removeAdmin");
    const result = await removeAdmin({ executor: user?.uid, email: removeAdminValue });
    setLoading(false);
    
    if(result.data.status !== 200) {
      setRemoveAdminSuccess("");
      return setRemoveAdminError(result.data.message);
    }
    
    setRemoveAdminError("");
    setRemoveAdminSuccess(result.data.message);
  }


  return (
    <div className={ dashboardStyles.dashboardPage }>
      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addAdmin }` }>
        <h3>Add Admin</h3>

        <div className={ styles.addAdminBody }>
          <p className={ dashboardStyles.errorMessage }>{ addAdminError }</p>
          <p className={ dashboardStyles.successMessage }>{ addAdminSuccess }</p>

          <input className={ dashboardStyles.input } type="email" value={ addAdminValue } onChange={ event => setAddAdminValue(event.target.value) } placeholder="Target E-mail"/>

          <button className={ dashboardStyles.button } onClick={ addAdmin } disabled={ loading }>Execute</button>
        </div>
      </div>

      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.removeAdmin }` }>
        <h3>Remove Admin</h3>

        <div className={ styles.removeAdminBody }>
          <p className={ dashboardStyles.errorMessage }>{ removeAdminError }</p>
          <p className={ dashboardStyles.successMessage }>{ removeAdminSuccess }</p>

          <input className={ dashboardStyles.input } type="email" value={ removeAdminValue } onChange={ event => setRemoveAdminValue(event.target.value) } placeholder="Target E-mail"/>

          <button className={ dashboardStyles.button } onClick={ removeAdmin } disabled={ loading }>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmins
