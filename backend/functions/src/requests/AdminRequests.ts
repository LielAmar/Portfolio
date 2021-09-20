import admin from "firebase-admin";

import { CallableContext } from "firebase-functions/v1/https";

import { isAdmin } from "../adminUtils";


/**
 * A request to make a user with the given email an admin
 * 
 * @param data      Data of the request, including the target user's email
 * @param context   Context of the request
 * @returns         Response
 */
export const addAdminRequest = async (data: any, context: CallableContext) => {
  const isAdminResponse = await isAdmin(context);
  
  if(!isAdminResponse.isAdmin)
    return { result: isAdminResponse.error };

  
  if(!data.email)
    return { result: `Invalid request. No email submitted!` };

  let adminLevel = data.adminLevel ? data.adminLevel : 1;

  try {
    let user = await admin.auth().getUserByEmail(data.email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true, adminLevel: adminLevel });
    return `Made ${data.email} an admin account!`;
  } catch(error) {
    return { result: error };
  }
};

/**
 * A request to make a user with the given email a non admin
 * 
 * @param data      Data of the request, including the target user's email
 * @param context   Context of the request
 * @returns         Response
 */
export const removeAdminRequest = async (data: any, context: CallableContext) => {
  const isAdminResponse = await isAdmin(context);
  
  if(!isAdminResponse.isAdmin)
    return { result: isAdminResponse.error };

  
  if(!data.email)
    return { result: `Invalid request. No email submitted!` };

  try {
    let user = await admin.auth().getUserByEmail(data.email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: false });
    return `Made ${data.email} a non-admin account!`;
  } catch(error) {
    return { result: error };
  }
};