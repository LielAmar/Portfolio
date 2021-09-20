import admin from "firebase-admin";

import { CallableContext } from "firebase-functions/v1/https";

import { isAdmin } from "../adminUtils";


// A type representing an entry of a coke
type CokeEntry = {
  date: string
  cokeType: CokeType
}

// An enum of all coke types
enum CokeType {
  PLASTIC_250_ML = "plastic_250_ml",
  PLASTIC_500_ML = "plastic_500_ml",
  PLASTIC_1000_ML = "plastic_1000_ml",
  PLASTIC_1500_ML = "plastic_1500_ml",
  PLASTIC_2000_ML = "plastic_2000_ml",
  GLASS_350_ML = "glass_350_ml",
  CAN_330_ML = "can_330_ml",
  SMALL_CUP = "small_cup",
  MEDIUM_CUP = "medium_cup",
  LARGE_CUP = "large_cup",
}


/**
 * A request to add an entry to the coke tracker
 * 
 * @param data      Data of the request, including the coke type
 * @param context   Context of the request
 * @returns         Response
 */
export const addCokeEntryRequest = async (data: any, context: CallableContext) => {
  const isAdminResponse = await isAdmin(context);
  
  if(!isAdminResponse.isAdmin)
    return { status: 403, message: isAdminResponse.error };


  if(!data.coke_type)
    return { status: 400, message: `Invalid request. No Coke Type submitted!` };

  let cokeType: CokeType;

  if(Object.values(CokeType).some((col: string) => col === data.coke_type))
    cokeType = <CokeType> data.coke_type;
  else
    return { status: 400, message: `The received Coke Type is invalid!` };

  const entry = {
    date: new Date(Date.now()).toLocaleString("he-IL", { timeZone: "Israel" }),
    cokeType
  } as CokeEntry;

  const result = await admin.firestore().collection("coke").add({ entry });
  return { status: 200, message: `Entry registered in the database with the ID of: "${result.id}".` };
};