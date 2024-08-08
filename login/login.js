// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword  } from "fhttps://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPBdLZVDpgcUNCTEFRTr7i_yDs3xODlT4",
  authDomain: "hacakathon-practice.firebaseapp.com",
  projectId: "hacakathon-practice",
  storageBucket: "hacakathon-practice.appspot.com",
  messagingSenderId: "1000026577771",
  appId: "1:1000026577771:web:1850f666ef471b22a88a2e",
  measurementId: "G-FBPK6XZXWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

let email = document.getElementById("email")
let password = document.getElementById("password")


window.login = () =>{
    let obj = {
        
    }
}