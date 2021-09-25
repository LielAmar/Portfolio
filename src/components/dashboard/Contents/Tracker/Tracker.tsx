import { getFunctions, httpsCallable } from "firebase/functions";
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Select, { Theme } from "react-select";
import Creatable from "react-select/creatable";

import { RoleUser } from "@context/AuthContext";

import styles from "./Tracker.module.css";
import dashboardStyles from "../Dashboard.module.css";
import { Theme as ThemeContextTheme, ThemeContext } from "@context/ThemeContext";


/**
 * The Dashboard/Tracker component
 * 
 * This component displays the tracker page in the dashboard.
 * This component receives 1 property:
 * - user (RoleUser): Instance of the current logged in user
 */

const functions = getFunctions();

interface props {
  user: RoleUser | null
}

/**
 * The theme of the select button
 * 
 * @param theme           Existing select button theme
 * @param themeProvider   User selected website theme
 */
 const selectButtonTheme = (theme: Theme, themeProvider: { theme: ThemeContextTheme }) => {
  return { 
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#99ceff",
      primary: themeProvider.theme === ThemeContextTheme.dark ? "rgb(214, 214, 214)" : "rgba(124, 124, 124, 0.35)",
      neutral0: themeProvider.theme === ThemeContextTheme.dark ? "#606060" : "#d6d6d6",
      neutral80: themeProvider.theme === ThemeContextTheme.dark ? "#fff" : "#000",
      neutral90: themeProvider.theme === ThemeContextTheme.dark ? "#fff" : "#000"
    },
    borderColor: "none",
    borderStyle: "none",
    opacity: themeProvider.theme === ThemeContextTheme.dark ? 0.35 : 0.5
  }
}

/**
 * All coke options when creating a new entry
 */
const cokeOptions = [
  { value: "plastic_250_ml", label: "Plastic Bottle 250ml" },
  { value: "plastic_500_ml", label: "Plastic Bottle 500ml" },
  { value: "plastic_1000_ml", label: "Plastic Bottle 1000ml" },
  { value: "plastic_1500_ml", label: "Plastic Bottle 1500ml" },
  { value: "plastic_2000_ml", label: "Plastic Bottle 2000ml" },
  { value: "glass_350_ml", label: "Glass Bottle 350ml" },
  { value: "can_330_ml", label: "Can 330ml" },
  { value: "small_cup", label: "Small Cup" },
  { value: "medium_cup", label: "Medium Cup" },
  { value: "large_cup", label: "Large Cup" },
]

/**
 * All burger size options when creating a new entry
 */
const burgerSizeOptions = [
  { value: "30_g", label: "30 Gram" },
  { value: "40_g", label: "40 Gram" },
  { value: "50_g", label: "50 Gram" },
  { value: "60_g", label: "60 Gram" },
  { value: "70_g", label: "70 Gram" },
  { value: "80_g", label: "80 Gram" },
  { value: "90_g", label: "90 Gram" },
  { value: "100_g", label: "100 Gram" },
  { value: "110_g", label: "110 Gram" },
  { value: "120_g", label: "120 Gram" },
  { value: "130_g", label: "130 Gram" },
  { value: "140_g", label: "140 Gram" },
  { value: "150_g", label: "150 Gram" },
  { value: "160_g", label: "160 Gram" },
  { value: "170_g", label: "170 Gram" },
  { value: "180_g", label: "180 Gram" },
  { value: "190_g", label: "190 Gram" },
  { value: "200_g", label: "200 Gram" },
  { value: "210_g", label: "210 Gram" },
  { value: "220_g", label: "220 Gram" },
  { value: "230_g", label: "230 Gram" },
  { value: "240_g", label: "240 Gram" },
  { value: "250_g", label: "250 Gram" },
  { value: "260_g", label: "260 Gram" },
  { value: "270_g", label: "270 Gram" },
  { value: "280_g", label: "280 Gram" },
  { value: "290_g", label: "290 Gram" },
  { value: "300_g", label: "300 Gram" },
  { value: "310_g", label: "310 Gram" },
  { value: "320_g", label: "320 Gram" },
  { value: "330_g", label: "330 Gram" },
  { value: "340_g", label: "340 Gram" },
  { value: "350_g", label: "350 Gram" },
  { value: "360_g", label: "360 Gram" },
  { value: "370_g", label: "370 Gram" },
  { value: "380_g", label: "380 Gram" },
  { value: "390_g", label: "390 Gram" },
  { value: "400_g", label: "400 Gram" },
  { value: "410_g", label: "410 Gram" },
  { value: "420_g", label: "420 Gram" },
  { value: "430_g", label: "430 Gram" },
  { value: "440_g", label: "440 Gram" },
  { value: "450_g", label: "450 Gram" },
  { value: "460_g", label: "460 Gram" },
  { value: "470_g", label: "470 Gram" },
  { value: "480_g", label: "480 Gram" },
  { value: "490_g", label: "490 Gram" },
  { value: "500_g", label: "500 Gram" },
]

/**
 * All burger restaurants options when creating a new entry
 */
const burgerRestaurantsOptions = [
  { value: "McDonald's", label: "McDonald's" },
  { value: "Burgers Bar", label: "Burgers Bar" },
  { value: "BBB", label: "BBB" },
  { value: "Segev Burger", label: "Segev Burger" },
  { value: "Burger Market", label: "Burger Market" },
  { value: "Burgeranch", label: "Burgeranch" },
  { value: "Burger Room", label: "Burger Room" },
  { value: "Captain Burger", label: "Captain Burger" },
  { value: "Iwo's", label: "Iwo's" },
  { value: "Bar 55", label: "Bar 55" },
  { value: "Berlin Burger", label: "Berlin Burger" },
  { value: "Josef Burger", label: "Josef Burger" },
  { value: "Eight", label: "Eight" },
  { value: "Angelica", label: "Angelica" },
  { value: "MJ Burger", label: "MJ Burger" },
  { value: "Agadir", label: "Agadir" },
  { value: "Mozes", label: "Mozes" },
  { value: "Fat Cow", label: "Fat Cow" },
  { value: "HaMosad", label: "HaMosad" },
  { value: "Kvish 90", label: "Kvish 90" },
  { value: "The Garage", label: "The Garage" },
  { value: "Burger King", label: "Burger King" },
  { value: "Shake Shack", label: "Shake Shack" },
  { value: "HaVitrina", label: "HaVitrina" },
  { value: "Susu and Sons", label: "Susu and Sons" },
  { value: "Just Meat", label: "Just Meat" },
  { value: "Burger Salon", label: "Burger Salon" },
  { value: "Meat Bar", label: "Meat Bar" },
  { value: "Humongous", label: "Humongous" },
]


const Tracker: React.FC<props> = ({ user }) => {
  const router = useRouter();
  const themeProvider = useContext(ThemeContext);

  const [loading, setLoading] = useState(false);

  const [addCokeEntryValue, setAddCokeEntryValue] = useState("");
  const [addCokeEntryError, setAddCokeEntryError] = useState("");
  const [addCokeEntrySuccess, setAddCokeEntrySuccess] = useState("");

  const [addBurgerEntrySizeValue, setAddBurgerEntrySizeValue] = useState("");
  const [addBurgerEntryRestaurantValue, setAddBurgerEntryRestaurantValue] = useState("");
  const [addBurgerEntryError, setAddBurgerEntryError] = useState("");
  const [addBurgerEntrySuccess, setAddBurgerEntrySuccess] = useState("");

  // isMounted is used to keep track on whether the current component is mounted or not. We check it when executing certain functions to avoid memory leaks.
  const isMounted: MutableRefObject<null | boolean> = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; }
  }, []);


  /**
   * Adds a new coke entry to the system
   * 
   * @param coke_type   The type of the coke to add
   */
  const addCokeEntry = async (coke_type: string) => {
    if(!user)
      return router.push("/login");

    setAddCokeEntrySuccess("");
    setAddCokeEntryError("");

    if(!user.isAdmin)
      return setAddCokeEntryError("You don't have permissions to do that!");

    if(!coke_type)
      return setAddCokeEntryError("Invalid Coke Type!");

    setLoading(true);
    const cokeEntry = httpsCallable(functions, "cokeEntry");
    const result = await cokeEntry({ executor: user?.uid, coke_type });
    if(isMounted.current) setLoading(false);

    const data = result.data as any;

    if(data.status !== 200 && isMounted.current)
      return setAddCokeEntryError(data.message);
    
    if(isMounted.current) setAddCokeEntrySuccess(data.message);
  }

  /**
   * Adds a new burger entry to the system
   * 
   * @param burger_size   The size of the burger to add
   * @param restaurant    The restaurant of the burger to add
   */
  const addBurgerEntry = async (burger_size: string, restaurant: string) => {
    if(!user)
      return router.push("/login");

    setAddBurgerEntrySuccess("");
    setAddBurgerEntryError("");

    if(!user.isAdmin)
      return setAddBurgerEntryError("You don't have permissions to do that!");

    if(!burger_size || !restaurant)
      return setAddBurgerEntryError("Invalid Burger Size/Restaurant Type!");

    setLoading(true);
    const burgerEntry = httpsCallable(functions, "burgerEntry");
    const result = await burgerEntry({ executor: user?.uid, burger_size: burger_size, restaurant: restaurant });
    if(isMounted.current) setLoading(false);

    const data = result.data as any;

    if(data.status !== 200 && isMounted.current)
      return setAddBurgerEntryError(data.message);
    
    if(isMounted.current) setAddBurgerEntrySuccess(data.message);
  }


  return (
    <div className={ dashboardStyles.dashboardConntent }>
      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addCokeEntry }` }>
        <h3>Add Coke Entry</h3>

        <div className={ styles.addCokeEntryBody }>
          <p className={ dashboardStyles.errorMessage }>{ addCokeEntryError }</p>
          <p className={ dashboardStyles.successMessage }>{ addCokeEntrySuccess }</p>

          <Select options={ cokeOptions } theme={ (theme) => selectButtonTheme(theme, themeProvider) } className={ styles.select } placeholder="Select Coke Type" isSearchable
            onChange={ event => event && setAddCokeEntryValue(event.value) } />

          <button className={ dashboardStyles.button } onClick={ () => addCokeEntry(addCokeEntryValue) } disabled={ loading }>Execute</button>
        </div>
      </div>

      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addBurgerEntry }` }>
        <h3>Add Burger Entry</h3>

        <div className={ styles.addBurgerEntryBody }>
          <p className={ dashboardStyles.errorMessage }>{ addBurgerEntryError }</p>
          <p className={ dashboardStyles.successMessage }>{ addBurgerEntrySuccess }</p>

          <Creatable options={ burgerSizeOptions } theme={ (theme) => selectButtonTheme(theme, themeProvider) } className={ styles.select } placeholder="Select Burger Size" isSearchable
            onChange={ event => event && setAddBurgerEntrySizeValue(event.value) } />
          <Creatable options= { burgerRestaurantsOptions } theme={ (theme) => selectButtonTheme(theme, themeProvider) } className={ styles.select } placeholder="Select Burger Restaurant" isSearchable
            onChange={ event => event && setAddBurgerEntryRestaurantValue(event.value) } />

          <button className={ dashboardStyles.button } onClick={ () => addBurgerEntry(addBurgerEntrySizeValue, addBurgerEntryRestaurantValue) } disabled={ loading }>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default Tracker;