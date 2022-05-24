import firebase from "firebase";
import apiKeys from "../config/apiKeys";
import * as Google from "expo-google-app-auth";

let app = !firebase.apps.length
  ? firebase.initializeApp(apiKeys.firebaseConfig)
  : firebase.app();

let db = firebase.firestore();
const storageRef = firebase.storage().ref();

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
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(function (result) {
          console.log("Signed in!");

          if (result.additionalUserInfo.isNewUser) {
            createUser(result);
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

export async function uploadCloudStorage(blob, user, pin) {
  console.log(pin);
  const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
  const uploadTask = storageRef.child(`${user.uid}/${timestamp}.jpg`).put(blob);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
      blob.close();
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at", downloadURL);
        blob.close();
      });
    }
  );
}
export function createUser(result) {
  db.collection("users")
    .doc(result.user.uid)
    .set({
      uid: result.user.uid,
      profilePic: result.user.photoURL,
      displayName: result.user.displayName,
      photos: []
    })
    .then(() => console.log("user created: " + result.user.displayName));
}


export function changeDisplayName(currentUser, name) {
  db.collection("users")
    .doc(currentUser)
    .update({
      displayName: name,
    });
}

export function addFollowing(currentUser, userToFollow) {
  // (db.collection("users").doc(currentUser).get().then((doc) => {
  //   const data = doc.data();
  //   console.log(data['displayName']);
  // }))

  db.collection("users")
    .doc(currentUser)
    .set({
      following: firebase.firestore.FieldValue.arrayUnion(userToFollow),
    }, { merge: true })
    .then(() => {
      db.collection("users").doc(userToFollow).get().then((doc) => {
        const data = doc.data();
        console.log("now following " + data['displayName'])
      })
    });
}

// export function addFriend(currentUser, userToFriend) {
//   console.log(userToFollow)
//   db.collection("users")
//     .doc(currentUser)
//     .set({
//       following: userToFollow,
//     }, {merge: true})
//     .then(() => console.log("now following " + userToFollow));
// }
