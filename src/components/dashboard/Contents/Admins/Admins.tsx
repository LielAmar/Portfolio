import { getFunctions, httpsCallable } from "firebase/functions";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { RoleUser } from "@context/AuthContext";

import styles from "./Admins.module.css";
import dashboardStyles from "../Dashboard.module.css";


/**
 * The Dashboard/Admins component
 * 
 * This component displays the admin page in the dashboard.
 * This component receives 1 property:
 * - user (RoleUser): Instance of the current logged in user
 */

const functions = getFunctions();

interface props {
  user: RoleUser | null
}


const Admins: React.FC<props> = ({ user }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [addAdminValue, setAddAdminValue] = useState("");
  const [addAdminError, setAddAdminError] = useState("");
  const [addAdminSuccess, setAddAdminSuccess] = useState("");

  const [removeAdminValue, setRemoveAdminValue] = useState("");
  const [removeAdminError, setRemoveAdminError] = useState("");
  const [removeAdminSuccess, setRemoveAdminSuccess] = useState("");

  // isMounted is used to keep track on whether the current component is mounted or not. We check it when executing certain functions to avoid memory leaks.
  const isMounted: MutableRefObject<null | boolean> = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; }
  }, []);

  
  /**
   * Adds a new admin to the system
   * 
   * @param email   The email of the admin to add
   */
  const addAdmin = async (email: string) => {
    if(!user)
      return router.push("/login");

    setAddAdminSuccess("");
    setAddAdminError("");

    if(!user.isAdmin)
      return setAddAdminError("You don't have permissions to do that!");

    if(!/^\S+@\S+\.\S+$/.test(email))
      return setAddAdminError("Invalid email address!");

    setLoading(true);
    const addAdmin = httpsCallable(functions, "addAdmin");
    const result = await addAdmin({ executor: user?.uid, email });
    if(isMounted.current) setLoading(false);

    const data = result.data as any;

    if(data.status !== 200 && isMounted.current)
      return setAddAdminError(data.message);

    if(isMounted.current) setAddAdminSuccess(data.message);
  }

  /**
   * Removes an existing admin from the system
   * 
   * @param email   The email of the admin to remove
   */
  const removeAdmin = async (email: string) => {
    if(!user)
      return router.push("/login");

    setAddAdminSuccess("");
    setAddAdminError("");

    if(!user.isAdmin)
      return setRemoveAdminError("You don't have permissions to do that!");

    if(!/^\S+@\S+\.\S+$/.test(email))
      return setRemoveAdminError("Invalid email address!");

    setLoading(true);
    const removeAdmin = httpsCallable(functions, "removeAdmin");
    const result = await removeAdmin({ executor: user?.uid, email });
    if(isMounted.current) setLoading(false);
    
    const data = result.data as any;

    if(data.status !== 200 && isMounted.current)
      return setRemoveAdminError(data.message);
    
    if(isMounted.current) setRemoveAdminSuccess(data.message);
  }


  return (
    <div className={ dashboardStyles.dashboardConntent }>
      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addAdmin }` }>
        <h3>Add Admin</h3>

        <div className={ styles.addAdminBody }>
          <p className={ dashboardStyles.errorMessage }>{ addAdminError }</p>
          <p className={ dashboardStyles.successMessage }>{ addAdminSuccess }</p>

          <input className={ dashboardStyles.input } type="email" value={ addAdminValue } onChange={ event => setAddAdminValue(event.target.value) } placeholder="Target E-mail"/>

          <button className={ dashboardStyles.button } onClick={ () => addAdmin(addAdminValue) } disabled={ loading }>Execute</button>
        </div>
      </div>

      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.removeAdmin }` }>
        <h3>Remove Admin</h3>

        <div className={ styles.removeAdminBody }>
          <p className={ dashboardStyles.errorMessage }>{ removeAdminError }</p>
          <p className={ dashboardStyles.successMessage }>{ removeAdminSuccess }</p>

          <input className={ dashboardStyles.input } type="email" value={ removeAdminValue } onChange={ event => setRemoveAdminValue(event.target.value) } placeholder="Target E-mail"/>

          <button className={ dashboardStyles.button } onClick={ () => removeAdmin(removeAdminValue) } disabled={ loading }>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default Admins
