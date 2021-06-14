import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAreiU_t9Q6GtpRTrgh-TQSbkZi4fPGsZw",
    authDomain: "tetris-63be6.firebaseapp.com",
    projectId: "tetris-63be6",
    storageBucket: "tetris-63be6.appspot.com",
    messagingSenderId: "221757421981",
    appId: "1:221757421981:web:fe64f5b11d0820777f5774"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName, avatar: user.photoURL, email: user.email, isAdmin: false, score: 0, isBlocked: false })
    return {
      email: user.email,
      avatar: user.photoURL,
      name: user.displayName,
      isAdmin: false,
      score: 0,
      isBlocked: false,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
};

export const updateUser = async (user) => {
  try {
    const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
    if (userDoc.exists) {
      await firebase.firestore().collection("users").doc(user.id).update({ ...user });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
      const snapshot = await db
                      .collection("users")
                      .where('isAdmin', '==', false)
                      .get();
      const items = snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id })
      );
      return items;
  } catch (error) {
      console.log(error);
      return [];
  }
}

export const updateBlockUser = async (block, id) => {
  try {
      const userRef = db.collection('users').doc(id);
      await userRef.update(block);
  } catch (error) {
      console.log(error);
  }
}

export const updateAvatar = async (user,avatar) => {
  try {
    const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
    if (userDoc.exists) {
      await firebase.firestore().collection("users").doc(user.id).update({ ...userDoc.data(), avatar: avatar });
    }
  } catch (err) {
    console.log(err);
  }
};
export const uploadAvatar = async (user) => {
  const ref = firebase.storage().ref().child(`/avatars/${user.photoURL}`);
  let downloadUrl = "";
  try {
    await ref.put(user);
    downloadUrl = await ref.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};