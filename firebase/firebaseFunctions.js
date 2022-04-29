import firebase from "firebase";
import apiKeys from "../config/apiKeys";
import * as Google from "expo-google-app-auth";

let app = !firebase.apps.length
  ? firebase.initializeApp(apiKeys.firebaseConfig)
  : firebase.app();

let db = firebase.firestore();
export { db };

console.log("Firebase set up!");

const isUserEqual = (googleUser, firebaseUser) => {
  if (!firebaseUser) {
    return false;
  }

  let providerData = firebaseUser.providerData;
  for (let i = 0; i < providerData.length; i++) {
    if (
      providerData[i].providerId ===
        firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
      providerData[i].uid === googleUser.getBasicProfile().getId()
    ) {
      return true;
    }
  }
};

const onSignIn = (googleUser) => {
  let unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();

    if (!isUserEqual(googleUser, firebaseUser)) {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );

      console.log(credential);
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(function (result) {
          console.log("Signed in!");

          if (result.additionalUserInfo.isNewUser) {
            setProfile(result);
          }
        })
        .catch(function (error) {
          console.log(error);
          // let errorCode = error.code;
          // let errorMessage = error.message;
          // let email = error.email;
          // let credential = error.credential;
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};

function setProfile(result) {
  db.collection("users").doc(result.user.uid).set({
    uid: result.user.uid,
    profilePic: result.user.photoURL,
    displayName: result.user.displayName,
  });
}

export async function login() {
  try {
    const result = await Google.logInAsync({
      iosClientId: apiKeys.authClient.iosID,
      androidClientId: apiKeys.authClient.androidID,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      onSignIn(result);

      return result.accessToken;
    } else {
      console.log("Cancelled");
    }
  } catch (e) {
    console.log(e);
  }
}

export async function logout() {
  try {
    firebase.auth().signOut();
  } catch (e) {
    console.error(e);
  }
}
