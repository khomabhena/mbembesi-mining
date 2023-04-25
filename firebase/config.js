import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID

  apiKey: "AIzaSyDrQOfv531TtgBwuzeZYkzvlYMZ8mqlDDo",
  authDomain: "uk-care-connection.firebaseapp.com",
  projectId: "uk-care-connection",
  storageBucket: "uk-care-connection.appspot.com",
  messagingSenderId: "679034708150",
  appId: "1:679034708150:web:2c1f1c024a416268714617",
  measurementId: "G-BPG0TK6MKG"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;