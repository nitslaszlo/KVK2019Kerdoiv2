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
// The timestampsInSnapshots setting now defaults to true and you no
// longer need to explicitly set it. In a future release, the setting
// will be removed entirely and so it is recommended that you remove it
// from your firestore.settings() call now.
// db.settings({ timestampsInSnapshots: true });

export default db;
