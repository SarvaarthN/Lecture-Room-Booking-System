// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, doc, getDoc,collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Firebase configuration object 
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "masts-957a8", 
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, collection, query, where, getDocs };


/*    try{
    const docRec=  await addDoc(collection(db,"users"),{
      firstName: "Paarth",
      lastName: "Shirsat",
      userId: "pas",
      password: "password" 
    })
    alert("It Worked!!!!!")
  }catch(error){
    console.log(err);
  }  */

  
