// Import the functions you need from the SDKs you need
// import {initializeApp} from '@firebase/app';
// import {getAnalytics} from '@firebase/analytics';
// import {getAuth, createUserWithEmailAndPassword} from '@firebase/auth';
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNPMCHDuRUexZCJLfjoeVvpGuHASAzFoo',
  authDomain: 'test-419bc.firebaseapp.com',
  projectId: 'test-419bc',
  storageBucket: 'test-419bc.appspot.com',
  messagingSenderId: '382797585035',
  appId: '1:382797585035:web:4bd5241a81dd1c39c9528e',
  measurementId: 'G-Z0RSG9NMCT',
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
const auth = firebase.auth();
export {auth};
