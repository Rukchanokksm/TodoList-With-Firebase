/* eslint-disable no-undef */
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  DATABASE_URL,
  STORAGE_BUCKET,
  MASSAGING_SENDER_ID,
  APP_ID,
} from "../constant/FirebaseKey"
export const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MASSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  apiKey: { API_KEY },
  authDomain: { AUTH_DOMAIN },
  databaseURL: { DATABASE_URL },
  projectId: { PROJECT_ID },
  storageBucket: { STORAGE_BUCKET },
  messagingSenderId: { MASSAGING_SENDER_ID },
  appId: { APP_ID },
}
