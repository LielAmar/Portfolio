import admin from "firebase-admin";

import { CallableContext } from "firebase-functions/v1/https";

export type isAdminResponse = {
  isAdmin: boolean
  adminLevel?: number
  error?: string
}

/**
 * A util function to check whether a user executing a certain request is an admin or not
 * 
 * @param auth      An instance of the auth object 
 * @param context   Context of the request
 * @returns         Promise of whether the executor is an admin or not
 */
export const isAdmin = async (context: CallableContext): Promise<isAdminResponse> => {
  if(!context.auth || !context.auth.token || !context.auth.token.email)
    return { isAdmin: false, error: `Failed to authenticate your request` };

  let executor = await admin.auth().getUserByEmail(context.auth.token.email);
    
  if(executor === undefined)
    return { isAdmin: false, error: `Failed to authenticate your request` };

  if(executor.customClaims === undefined || executor.customClaims.admin === false)
    return { isAdmin: false, error: `You don't have enough permissions to do that!` };

  return new Promise((resolve, _reject) => resolve({ isAdmin: true }));
}


/**
 * A util function to check whether a user executing a certain request is an admin or not
 * 
 * @param auth            An instance of the auth object 
 * @param context         Context of the request
 * @param minAdminLevel   Minimum admin level
 * @returns               Promise of whether the executor is an admin above the minAdminLevel
 */
 export const isAdminLevel = async (context: CallableContext, minAdminLevel: number): Promise<isAdminResponse> => {
  if(!context.auth || !context.auth.token || !context.auth.token.email)
    return { isAdmin: false, error: `Failed to authenticate your request` };

  let executor = await admin.auth().getUserByEmail(context.auth.token.email);
    
  if(executor === undefined)
    return { isAdmin: false, error: `Failed to authenticate your request` };

  if(executor.customClaims === undefined || executor.customClaims.admin === undefined || executor.customClaims.admin === false
    || executor.customClaims.adminLevel === undefined || executor.customClaims.adminLevel < minAdminLevel)
    return { isAdmin: false, error: `You don't have enough permissions to do that!` };

  let adminLevel = executor.customClaims.adminLevel;
  return new Promise((resolve, _reject) => resolve({ isAdmin: true, adminLevel }));
}