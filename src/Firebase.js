import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC4LndEwyQYi1wgRB-7K9n7JzrFidd9L2A',
  authDomain: 'asset-tracker-app-030220.firebaseapp.com',
  databaseURL: 'https://asset-tracker-app-030220.firebaseio.com',
  projectId: 'asset-tracker-app-030220',
  storageBucket: 'asset-tracker-app-030220.appspot.com',
  messagingSenderId: '1046049078772',
  appId: '1:1046049078772:web:a50168dcfa4b94f11a0da1'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
