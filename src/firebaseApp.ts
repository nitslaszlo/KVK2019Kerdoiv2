import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAPMxlwqIILlwmYORXkL6m356moBg6cDo4",
  authDomain: "kvk2019nits.firebaseapp.com",
  databaseURL: "https://kvk2019nits.firebaseio.com",
  projectId: "kvk2019nits",
  storageBucket: "kvk2019nits.appspot.com",
  messagingSenderId: "824295202086"
};

const app = firebase.initializeApp(config);
const db = app.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;
