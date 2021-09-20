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
    return { status: 403, message: isAdminResponse.error };

  
  if(!data.email)
    return { status: 400, message: `Invalid request. No Email Address submitted!` };

  let adminLevel = data.adminLevel ? data.adminLevel : 1;

  try {
    let user = await admin.auth().getUserByEmail(data.email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true, adminLevel: adminLevel });
    return { status: 200, message: `Made ${data.email} an admin account!` };
  } catch(error) {
    return { status: 500, message: (error as any).message };
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
    return { status: 403, message: isAdminResponse.error };

  
  if(!data.email)
    return { status: 400, message: `Invalid request. No Email Address submitted!` };

  try {
    let user = await admin.auth().getUserByEmail(data.email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: false });
    return { status: 200, message: `Made ${data.email} a non-admin account!` };
  } catch(error) {
    return { status: 500, message: (error as any).message };
  }
};