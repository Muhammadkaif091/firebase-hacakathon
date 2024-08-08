// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore,doc, setDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const db = getFirestore()
const auth = getAuth()

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")

window.signup = () => {
    let obj = {
     email: email.value,
     name: name.value,
     password: password.value

    }
    console.log(obj);
createUserWithEmailAndPassword(auth, obj.email,obj.password)
.then((res)=>{
    obj.id = res.user.uid
    let reference = doc(db, "users" , obj.id)
    setDoc(reference,obj)

})
}

