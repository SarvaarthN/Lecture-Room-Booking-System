  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { 
    getFirestore, 
    addDoc,
    collection,
    getDocs
  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyASPyqfhK79zfqL0vdECDaZI7AQ_7KgUKQ",
    authDomain: "masts-957a8.firebaseapp.com",
    databaseURL: "https://masts-957a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "masts-957a8",
    storageBucket: "masts-957a8.firebasestorage.app",
    messagingSenderId: "1017699404470",
    appId: "1:1017699404470:web:58efffb5fe7083228ab417",
    measurementId: "G-8KCYJGXBRW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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

  const quertSnapshot=await getDocs(collection(db,"users"));
  quertSnapshot.forEach(element=>{
    console.log(element.data())

  })
  