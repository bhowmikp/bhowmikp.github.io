import firebase from "firebase/app";
import "firebase/firestore";
require("dotenv").config();

export function database() {
  try {
    var config = {
      apiKey: process.env.FIREBASE_API_KEY,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error("Firebase initialization error", err.stack);
    }
  }

  return firebase.firestore();
}
