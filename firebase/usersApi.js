import { db } from "../firebase/firebaseFunctions.js";


export function createUser(result) {
    db.collection("users").doc(result.user.uid).set({
      uid: result.user.uid,
      profilePic: result.user.photoURL,
      displayName: result.user.displayName,
    }).then(() => console.log("user created: " + result.user.displayName));
  }

export function updateDisplayName(userId, name, displayNameUpdated) {
    db.collection("users").doc(userId).update({
      displayName: name,    
    }).then(() => console.log('username updated to ' + name + "!"));
}