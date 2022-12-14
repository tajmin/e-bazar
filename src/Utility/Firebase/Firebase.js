import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdMmsxCqL74jc3GtMsT7GXvlGTIklH4SE",
  authDomain: "e-bazr.firebaseapp.com",
  projectId: "e-bazr",
  storageBucket: "e-bazr.appspot.com",
  messagingSenderId: "1020323787515",
  appId: "1:1020323787515:web:ba0ca4e34493f7b0d8365e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const googleSignInWithPopup = () =>
  signInWithPopup(auth, googleProvider);

export const database = getFirestore();

export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(database, "categories");
  const queryObject = query(collectionRef);
  const querSnapShot = await getDocs(queryObject);

  const categoryList = querSnapShot.docs.reduce((accumulator, document) => {
    const { title, items } = document.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

  return categoryList;
};

export const createUserDocFromAuth = async (userAuth, extraInfo = {}) => {
  if (!userAuth) return;
  const userDocReference = doc(database, "users", userAuth.uid);
  const userData = await getDoc(userDocReference);

  if (!userData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocReference, {
        displayName,
        email,
        createdAt,
        ...extraInfo,
      });
    } catch (error) {
      console.log("Error: creating user", error.message);
    }
  }
  return userDocReference;
};

export const createUserWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const emailSignIn = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => await signOut(auth);

export const authStageChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
