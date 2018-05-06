import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHRkVHlMfEegheIxyMQFSpbQnukR3nLLI",
  authDomain: "catch-of-the-day-tsarev.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tsarev.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
