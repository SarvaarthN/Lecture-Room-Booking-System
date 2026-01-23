import { db, doc, getDoc } from '../../firestore.js';

function classInNewTab() {
  window.open('../../Dashboardnew.html','blank');
}

async function loadTeacherData() {
  const docId = localStorage.getItem("userDocId");
  const role = localStorage.getItem("userRole");
  
  if (!docId || role !== "teacher") {
    alert("Unauthorized access or missing user info.");
    window.location.href = "../../login.html";
    return;
  }

  try {
    const teacherRef = doc(db, 'users', docId);
    const snap = await getDoc(teacherRef);

    if (snap.exists()) {
      const data = snap.data();
      document.getElementById('teacher-name').textContent = data.Name || '';
      document.getElementById('teacher-designation').textContent = data.Designation || '';
      document.getElementById('teacher-qualification').textContent = data.Qualification || '';
      document.getElementById('teacher-specialization').textContent = data.Specialization || '';
      document.getElementById('teacher-email').textContent = data.Email || '';
    }
  } catch (error) {
    console.error("Error fetching teacher data:", error);
  }
}

loadTeacherData();
