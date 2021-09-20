import firebase from "firebase";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import Select, { Theme } from "react-select";
import Creatable from "react-select/creatable";

import { RoleUser } from "@context/AuthContext";

import styles from "./DashboardTracker.module.css";
import dashboardStyles from "../Dashboard.module.css";
import { Theme as ThemeContextTheme, ThemeContext } from "@context/ThemeContext";

interface props {
  user: RoleUser | null
}


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

const DashboardTracker: React.FC<props> = ({ user }) => {
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


  const selectTheme = (theme: Theme) => {
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


  const addCokeEntry = async () => {
    if(!user)
      return router.push("/login");

    setAddCokeEntrySuccess("");
    setAddCokeEntryError("");

    if(!user.isAdmin)
      return setAddCokeEntryError("You don't have permissions to do that!");

    if(!addCokeEntryValue)
      return setAddCokeEntryError("Invalid Coke Type!");

    setLoading(true);
    const cokeEntry = firebase.functions().httpsCallable("cokeEntry");
    const result = await cokeEntry({ executor: user?.uid, coke_type: addCokeEntryValue });
    setLoading(false);

    if(result.data.status !== 200)
      return setAddCokeEntryError(result.data.message);
    
    setAddCokeEntrySuccess(result.data.message);
  }

  const addBurgerEntry = async () => {
    if(!user)
      return router.push("/login");

    setAddBurgerEntrySuccess("");
    setAddBurgerEntryError("");

    if(!user.isAdmin)
      return setAddBurgerEntryError("You don't have permissions to do that!");

    if(!addBurgerEntrySizeValue || !addBurgerEntryRestaurantValue)
      return setAddBurgerEntryError("Invalid Burger Size/Restaurant Type!");

    setLoading(true);
    const burgerEntry = firebase.functions().httpsCallable("burgerEntry");
    const result = await burgerEntry({ executor: user?.uid, burger_size: addBurgerEntrySizeValue, restaurant: addBurgerEntryRestaurantValue });
    setLoading(false);

    if(result.data.status !== 200)
      return setAddBurgerEntryError(result.data.message);
    
    setAddBurgerEntrySuccess(result.data.message);
  }

  return (
    <div className={ dashboardStyles.dashboardPage }>
      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addCokeEntry }` }>
        <h3>Add Coke Entry</h3>

        <div className={ styles.addCokeEntryBody }>
          <p className={ dashboardStyles.errorMessage }>{ addCokeEntryError }</p>
          <p className={ dashboardStyles.successMessage }>{ addCokeEntrySuccess }</p>

          <Select options={ cokeOptions } theme={ selectTheme } className={ styles.select } placeholder="Select Coke Type" isSearchable={ true }
            onChange={ event => event && setAddCokeEntryValue(event.value) } />

          <button className={ dashboardStyles.button } onClick={ addCokeEntry } disabled={ loading }>Execute</button>
        </div>
      </div>

      <div className={ ` ${dashboardStyles.dashboardBullet} ${ styles.addBurgerEntry }` }>
        <h3>Add Burger Entry</h3>

        <div className={ styles.addBurgerEntryBody }>
          <p className={ dashboardStyles.errorMessage }>{ addBurgerEntryError }</p>
          <p className={ dashboardStyles.successMessage }>{ addBurgerEntrySuccess }</p>

          <Creatable options={ burgerSizeOptions } theme={ selectTheme } className={ styles.select } placeholder="Select Burger Size" isSearchable={ true }
            onChange={ event => event && setAddBurgerEntrySizeValue(event.value) } />
          <Creatable options= { burgerRestaurantsOptions } theme={ selectTheme } className={ styles.select } placeholder="Select Burger Restaurant" isSearchable={ true }
            onChange={ event => event && setAddBurgerEntryRestaurantValue(event.value) } />

          <button className={ dashboardStyles.button } onClick={ addBurgerEntry } disabled={ loading }>Execute</button>
        </div>
      </div>
    </div>
  );
}

export default DashboardTracker;
