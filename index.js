import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore,collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const db = getFirestore();

let fullName = document.getElementById("fullName")
let email = document.getElementById("email")
let phoneNumber = document.getElementById("phoneNumber")
let address = document.getElementById("address")
let password = document.getElementById("password")

window.submit = async () => {
     let obj = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      address: address.value,
      phoneNumber: phoneNumber.value
     }

     let reference = collection(db, "students");
     let docRef = await addDoc(reference, obj); 
     then((res) => {
         console.log("Document written with ID: ", docRef.id);
        
     }).catch((err) => {
         console.error("Error adding document: ", e);  
     }); 
  } 




