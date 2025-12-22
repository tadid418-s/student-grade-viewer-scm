/**
 * Dashboard Logic
 * Handles data rendering for the student dashboard
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    renderStudentInfo();
    renderGrades();
    setupMobileToggle();
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

function renderStudentInfo() {
    // Simulate fetching user ID
    const studentIdElement = document.getElementById('student-id');
    if (studentIdElement) {
        // Random ID for demo purposes
        const randomId = 'ETS' + Math.floor(1000 + Math.random() * 9000) + '/14';
        studentIdElement.textContent = randomId;
    }
}

function renderGrades() {
    const gradeBoard = document.getElementById('grade-board');
    if (!gradeBoard) return;

    // Mock Data
    const grades = [
        {
            subject: 'Mathematics for CS',
            code: 'MATH101',
            credits: 4,
            grade: 'A',
            color: 'green'
        },
        {
            subject: 'Intro to Algorithms',
            code: 'CS102',
            credits: 4,
            grade: 'A-',
            color: 'green'
        },
        {
            subject: 'Database Systems',
            code: 'CS201',
            credits: 3,
            grade: 'B+',
            color: 'blue'
        },
        {
            subject: 'Web Development',
            code: 'CS205',
            credits: 3,
            grade: 'A',
            color: 'green'
        },
        {
            subject: 'Ethics in Technology',
            code: 'PHIL101',
            credits: 2,
            grade: 'P',
            color: 'gray'
        },
        {
            subject: 'Physics I',
            code: 'PHYS101',
            credits: 3,
            grade: 'C+',
            color: 'yellow'
        }
    ];

    // Clear loading placeholder
    gradeBoard.innerHTML = '';

    // Render Cards
    grades.forEach(course => {
        const card = document.createElement('div');
        card.className = 'grade-card';

        // Choose color class for grade pill
        let gradeColorClass = 'bg-gray';
        if (course.grade.startsWith('A')) gradeColorClass = 'bg-green';
        if (course.grade.startsWith('B')) gradeColorClass = 'bg-blue';
        if (course.grade.startsWith('C')) gradeColorClass = 'bg-yellow';
        if (course.grade.startsWith('D') || course.grade.startsWith('F')) gradeColorClass = 'bg-red';
        if (course.color) gradeColorClass = `bg-${course.color}`; // Override if specified in data

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
