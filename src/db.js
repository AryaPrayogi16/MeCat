import { initializeApp } from "firebase/app";
import "firebase/database";

const firebaseConfig = {



  apiKey: "AIzaSyC0oybLYr8wfvXas6-ZLV77yzsxFg6fscI",
  authDomain: "whatsapp-clone-bd022.firebaseapp.com",
  projectId: "whatsapp-clone-bd022",
  storageBucket: "whatsapp-clone-bd022.appspot.com",
  messagingSenderId: "368079175706",
  appId: "1:368079175706:web:47b220fd665940aab7d1a3",
  databaseURL: "https://whatsapp-clone-bd022-default-rtdb.firebaseio.com",


};


const database = initializeApp(firebaseConfig);

export default database;