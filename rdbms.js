
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, ref, child, get, set , update} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
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
  const app2 = initializeApp(firebaseConfig);
  const db2 = getDatabase(app2);
  console.log(db2);
  console.log("It is working")



  export function changestatus(room, stat) {
    let newstat = "";
    if (stat == 1) newstat = "vacant";
    else if (stat == 2) newstat = "occupied";
    else if (stat == 3) newstat = "scheduled";
  
    update(ref(db2, room), {
      status: newstat
    });
  
    console.log("Status updated without overwriting!");
  }
  
  export async function readstat(room) {
    const dbRef = ref(db2);
    try {
      const snapshot = await get(child(dbRef, room));
      if (snapshot.exists()) {
        return snapshot.val().status;
      } else {
        console.log("No data found at that path.");
        return null;
      }
    } catch (error) {
      console.error("Error reading data:", error);
      return null;
    }

  }
  export async function readTimetable(room){
    const dbRef = ref(db2);
    try {
      const snapshot = await get(child(dbRef, room));
      if (snapshot.exists()) {
        console.log("I found Data")
        return snapshot.val().timetable;

      } else {
        console.log("No data found at that path.");
        return null;
      }
    } catch (error) {
      console.error("Error reading data:", error);
      return null;
    }

      
  }
  export function addtimetable(room) {
    update(ref(db2, room), {
      timetable: {
        monday: {
          "9:30-10:25": "EXTC SY",
          "10:30-11:25": "VACANT",
          "11:30-12:25": "EE TY"
        },
        tuesday: {
          "9:30-10:25": "VACANT",
          "10:30-11:25": "COMP SY",
          "11:30-12:25": "EC TY"
        },
        wednesday: {
          "9:30-10:25": "IT FY",
          "10:30-11:25": "VACANT",
          "11:30-12:25": "MECH TY"
        },
        thursday: {
          "9:30-10:25": "PROD FY",
          "10:30-11:25": "VACANT",
          "11:30-12:25": "EXTC TY"
        },
        friday: {
          "9:30-10:25": "COMP FY",
          "10:30-11:25": "VACANT",
          "11:30-12:25": "EE SY"
        }
      }
      
      
    });
  
    console.log("Status updated");
  }
  export async function isScheduled(room){
    const dbRef = ref(db2);
    try {
      const snapshot = await get(child(dbRef, room));
      if (snapshot.exists()) {
        if (snapshot.val().status!="occupied" && snapshot.val().status!="vacant")
        return true;
      else return false;
      } 
      else {
        console.log("No data found at that path.");
        return null;
      }
    } catch (error) {
      console.error("Error reading data:", error);
      return null;
  }
}
export async function isVacant(room){
  const dbRef = ref(db2);
  try {
    const snapshot = await get(child(dbRef, room));
    if (snapshot.exists()) {
      if (snapshot.val().status=="vacant")
      return true;
    else return false;
    } 
    else {
      console.log("No data found at that path.");
      return null;
    }
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
}
  
}
export async function IsOccupied(room){
  const dbRef = ref(db2);
  try {
    const snapshot = await get(child(dbRef, room));
    if (snapshot.exists()) {
      if (snapshot.val().status=="occupied")
      return true;
    else return false;
    } 
    else {
      console.log("No data found at that path.");
      return null;
    }
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
}
}
export async function setCurrentClass(room, name){}
export async function getCurrentClass(room){}
