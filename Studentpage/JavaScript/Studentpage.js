import { db, doc, getDoc } from '../../firestore.js';

document.getElementById("classBtn").addEventListener("click", () => {
  window.open("../../Dashboardnew.html", "_blank");
});

async function loadStudentData() {
  const docId = localStorage.getItem("userDocId");
  const role = localStorage.getItem("userRole");

  if (!docId || role !== "student") {
    alert("Unauthorized access or missing user info.");
    window.location.href = "../../login.html";
    return;
  }

  try {
    const studentRef = doc(db, "users", docId);
    const snap = await getDoc(studentRef);

    if (snap.exists()) {
      const data = snap.data();
      document.getElementById("student-name").textContent = data.Name || "";
      document.getElementById("student-class").textContent = data.Class || "";
      document.getElementById("student-regId").textContent = data.Registration_Id || "";
      document.getElementById("student-dob").textContent = data.D_O_B || "";
      document.getElementById("student-gender").textContent = data.Gender || "";
    }
  } catch (err) {
    console.error("Error fetching student data:", err);
  }
}

loadStudentData();
