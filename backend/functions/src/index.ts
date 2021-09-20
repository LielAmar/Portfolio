import * as functions from "firebase-functions";

import admin from "firebase-admin";

import { addCokeEntryRequest } from "./requests/CokeRequests";
import { addBurgerEntryRequest } from "./requests/BurgerRequests";
import { addAdminRequest, removeAdminRequest } from "./requests/AdminRequests";

// <====== Initializations =======>
admin.initializeApp();

export const cokeEntry = functions.https.onCall(addCokeEntryRequest);
export const burgerEntry = functions.https.onCall(addBurgerEntryRequest);
export const addAdmin = functions.https.onCall(addAdminRequest);
export const removeAdmin = functions.https.onCall(removeAdminRequest);