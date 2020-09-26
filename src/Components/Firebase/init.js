import React from "react";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const FirebaseContext = React.createContext(null);

console.log("FIREBASE CONTEXT");
var firebaseConfig = {
  apiKey: "AIzaSyD8pKkUz9cIEyavpMqh0LgCKnNDnTmIjWY",
  authDomain: "expense-tracker-2060.firebaseapp.com",
  databaseURL: "https://expense-tracker-2060.firebaseio.com",
  projectId: "expense-tracker-2060",
  storageBucket: "expense-tracker-2060.appspot.com",
  messagingSenderId: "364261177925",
  appId: "1:364261177925:web:854a8541a8ac59ea77412c",
  measurementId: "G-JFZ6MGSZZG",
};

class Firebase {
  constructor() {
    console.log("FIREBASE INIT");
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.database = app.firestore();
    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider).then((user) => {
      if (user.additionalUserInfo.isNewUser) {
        this.database
          .collection("users")
          .doc(user.user.uid)
          .set({
            userName: user.user.displayName,
            userEmail: user.user.email,
            userTransaction: {
              transactions: [],
              fromdb: true,
            },
          });
      }
    });

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
export { FirebaseContext };
