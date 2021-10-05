import admin from "firebase-admin";

import { CallableContext } from "firebase-functions/v1/https";

import { isAdmin } from "../adminUtils";

// A type representing an entry of a burger
type BurgerEntry = {
  date: string
  burger_size: string,
  restaurant: string
}


/**
 * A request to add an entry to the burger tracker
 * 
 * @param data      Data of the request, including the burger size and restaurant
 * @param context   Context of the request
 * @returns         Response
 */
export const addBurgerEntryRequest = async (data: any, context: CallableContext) => {
  const isAdminResponse = await isAdmin(context);
  
  if(!isAdminResponse.isAdmin)
    return { status: 403, message: isAdminResponse.error };


  if(!data.burger_size || !data.restaurant)
    return { status: 400, message: `Invalid request. No Burger Size or Restaurant submitted!` };
  

  const entry = {
    date: new Date(Date.now()).toLocaleString("he-IL", { timeZone: "Israel" }),
    burger_size: data.burger_size,
    restaurant: data.restaurant
  } as BurgerEntry;

  const result = await admin.firestore().collection("burger").add({ entry });
  return { status: 200, message: `Entry registered in the database with the ID of: "${result.id}".` };
};