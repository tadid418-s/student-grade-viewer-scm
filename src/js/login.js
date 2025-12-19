// ================================
// Login Form Validation
// ================================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const studentIdInput = document.getElementById("studentId");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const studentId = studentIdInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateStudentId(studentId)) {
            alert(
                "Invalid Student ID.\nAllowed: letters, numbers, hyphen (-), and slash (/)."
            );
            studentIdInput.focus();
            return;
        }

        if (!validatePassword(password)) {
            alert(
                "Invalid Password.\nPassword must be at least 8 characters long and include a number."
            );
            passwordInput.focus();
            return;
        }

        alert("Login successful (validation passed).");
        form.reset();
    });
});

/* ===== Validation Functions ===== */

function validateStudentId(studentId) {
    // Letters, numbers, hyphen, slash
    const studentIdPattern = /^[A-Za-z0-9/-]+$/;
    return studentIdPattern.test(studentId);
}

function validatePassword(password) {
    // Minimum 8 characters, at least one number
    const passwordPattern = /^(?=.*\d).{8,}$/;
    return passwordPattern.test(password);
}
