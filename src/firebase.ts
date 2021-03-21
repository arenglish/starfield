// firebase performance monitoring setup
import firebase from "firebase/app";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7CKalxiiZOw2XzdxLlVy-IFSUz7xauw",
  authDomain: "starfield-ddc29.firebaseapp.com",
  projectId: "starfield-ddc29",
  storageBucket: "starfield-ddc29.appspot.com",
  messagingSenderId: "144930472270",
  appId: "1:144930472270:web:18b9cced746d2a97cfde1f",
  measurementId: "G-ZK3123P6YR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
firebase.performance();
