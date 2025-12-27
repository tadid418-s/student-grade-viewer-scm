document.addEventListener("DOMContentLoaded", () => {
  loadStudentGrades();
  setupMobileToggle();
});

/* =========================
   Load JSON & Render Grades
   ========================= */
async function loadStudentGrades() {
  try {
    const response = await fetch("data/students.json");
    const data = await response.json();

    // 👉 Select first student (can be changed later)
    const student = data.students[0];

    renderTable(student.grades);
    calculateGPA(student.grades);
  } catch (error) {
    console.error("Error loading grades:", error);
  }
}

/* =========================
   Render Grades Table
   ========================= */
function renderTable(grades) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  grades.forEach((item) => {
    const gpa = gradeToGPA(item.grade);

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.code}</td>
            <td>${item.subject}</td>
            <td>${item.credits}</td>
            <td>${item.grade}</td>
            <td>
                <span class="grade-pill bg-${item.color}">
                    ${gpa !== null ? gpa : ""}
                </span>
            </td>
        `;
    tbody.appendChild(row);
  });
}
function gradeToGPA(grade) {
  const scale = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.75,
    "B+": 2.75,
    B: 2.5,
    "B-": 2.25,
    "C+": 1.75,
    C: 1.5,
    "C-": 1.25,
    D: 1.0,
    F: 0.0,
    P: null, // Pass – not counted
  };
  return scale[grade] ?? null;
}

/* =========================
   Weighted GPA Calculation
   ========================= */
function calculateGPA(grades) {
  let totalPoints = 0;
  let totalCredits = 0;

  grades.forEach((item) => {
    const gpa = gradeToGPA(item.grade);
    if (gpa !== null) {
      totalPoints += gpa * item.credits;
      totalCredits += item.credits;
    }
  });

  const finalGPA = totalCredits ? totalPoints / totalCredits : 0;

  displayGPA(finalGPA);
}

function displayGPA(gpa) {
  const gpaElement = document.getElementById("gpa-value");
  if (gpaElement) {
    gpaElement.textContent = gpa.toFixed(2);
  }
}

function goToDashboard() {
  window.location.href = "dashboard.html";
}

function setupMobileToggle() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}
