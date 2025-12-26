/**
 * Dashboard Logic
 * Handles data rendering for the student dashboard
 */

if (sessionStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

// Simulate logged-in user (In a real app, this comes from localStorage/session)
const CURRENT_USER_ID = "ETS1234/15";

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});

function initDashboard() {
  setupMobileToggle();
  setupLogout();
  fetchStudentData(CURRENT_USER_ID);
}

function setupMobileToggle() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const sidebar = document.getElementById("sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

function setupLogout() {
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }
}

async function fetchStudentData(targetId) {
  try {
    const response = await fetch("data/students.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const student = data.students.find((s) => s.id === targetId);

    if (student) {
      renderDashboard(student);
    } else {
      console.error("Student not found");
      showError("Student not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    showError("Failed to load data");
  }
}

function renderDashboard(student) {
  // Render Student Info
  document.querySelector(".user-name").textContent = student.name;

  const nameEl = document.querySelector(".detail-row .value"); // First value is name
  if (nameEl) nameEl.textContent = student.name;

  const idEl = document.getElementById("student-id");
  if (idEl) idEl.textContent = student.id;

  const majorParent = idEl ? idEl.closest(".profile-details") : null;
  if (majorParent) {
    // Assuming specific structure or finding by label would be more robust,
    // but simplified here for the current HTML structure:
    const majorEl = majorParent.querySelectorAll(".value")[2];
    if (majorEl) majorEl.textContent = student.major;
  }

  // Render Grades
  const gradeBoard = document.getElementById("grade-board");
  if (!gradeBoard) return;

  gradeBoard.innerHTML = ""; // Clear loading

  if (student.grades.length === 0) {
    gradeBoard.innerHTML = '<div class="no-grades">No grades available.</div>';
    return;
  }

  student.grades.forEach((course) => {
    const card = document.createElement("div");
    card.className = "grade-card";

    // Choose color class for grade pill
    let gradeColorClass = "bg-gray";
    if (course.grade.startsWith("A")) gradeColorClass = "bg-green";
    if (course.grade.startsWith("B")) gradeColorClass = "bg-blue";
    if (course.grade.startsWith("C")) gradeColorClass = "bg-yellow";
    if (course.grade.startsWith("D") || course.grade.startsWith("F"))
      gradeColorClass = "bg-red";
    if (course.color) gradeColorClass = `bg-${course.color}`;

    card.innerHTML = `
            <div class="grade-card-title">${course.subject}</div>
            
            <div class="grade-card-property">
                <span class="property-label">Code</span>
                <span>${course.code}</span>
            </div>
            
            <div class="grade-card-property">
                <span class="property-label">Credits</span>
                <span>${course.credits}</span>
            </div>

            <div class="grade-card-property">
                <span class="property-label">Grade</span>
                <span class="grade-pill ${gradeColorClass}">${course.grade}</span>
            </div>
        `;

    gradeBoard.appendChild(card);
  });
}

function showError(message) {
  const gradeBoard = document.getElementById("grade-board");
  if (gradeBoard) {
    gradeBoard.innerHTML = `<div class="error-message">${message}</div>`;
  }
}
