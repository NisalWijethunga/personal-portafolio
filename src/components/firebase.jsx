import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9xbTHhaTrtW9yrXPp80r5b_hXgykTsK8",
  authDomain: "mypersonalportafolio1.firebaseapp.com",
  databaseURL: "https://mypersonalportafolio1-default-rtdb.firebaseio.com",
  projectId: "mypersonalportafolio1",
  storageBucket: "mypersonalportafolio1.appspot.com",
  messagingSenderId: "724868781621",
  appId: "1:724868781621:web:6344295e2dffc8e7ab837c"
};


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export {auth}// eslint-disable-line