/* eslint-disable no-import-assign */
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "./Config"

const app = initializeApp(firebaseConfig)
export default getDatabase(app)
