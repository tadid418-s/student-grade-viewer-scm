 # Student Grade Viewer - SCM Project

## 1. System Overview
The Student Grade Viewer is a web-based dashboard application designed to provide students with a modern, responsive interface to view their academic performance. The system simulates a live student portal, allowing users to log in, view their profile, check current semester grades, and calculate their GPA dynamically.

This project serves as a practical implementation of Software Configuration Management (SCM) principles, ensuring code integrity, version control, and organized configuration identification.

---

## 2. Software Configuration Management (SCM) Principles
This repository strictly adheres to SCM best practices to manage the software lifecycle.

### 2.1 Configuration Identification
The system is decomposed into managed Configuration Items (CIs). The directory structure defines the baseline for the "Source" configuration.

#### student-grade-viewer-scm/
#### ├── README.md               # Configuration Management Plan & Documentation
#### └── src/                    # Source Code Baseline
    ├── dashboard.html      # CI: Dashboard Interface
    ├── grades.html         # CI: Grades Detail Interface
    ├── login.html          # CI: Authentication Interface
    ├── css/                # CI: Styling Sub-system
    │   ├── dashboard.css   # Styles for Dashboard & Sidebar
    │   └── grades.css      # Styles specific to Grades Table
    ├── js/                 # CI: Logic Sub-system
    │   ├── dashboard.js    # Dashboard rendering & Sidebar logic
    │   ├── grades.js       # Grade calculation & Data fetching
    │   └── login.js        # Auth simulation logic
    └── data/               # CI: Data Sub-system
        └── students.json   # Mock Database (Configuration Data)

### 2.2 Version Control & Change Management
*   VCS: Git is used for revision control.
*   Baselines: The main branch acts as the stable product baseline.
*   Change Control: All changes are introduced via atomic commits or feature branches to ensure traceability. Specific IDs (e.g., Step IDs or Issue IDs) should be referenced in commit messages where applicable.

### 2.3 Build & Release Management
*   Environment: Client-side web environment (Browser-based).
*   Dependencies: No external build tools (npm/webpack) required for the baseline version; standard HTML5/CSS3/ES6 stack.
*   Release: The software is "released" by deploying the src directory to a web server context.

---

## 3. Features
*   Student Dashboard: Displays student profile (ID, Major, Name) and quick stats.
*   Grades Management: 
    *   Dynamic GPA calculation based on credit hours and letter grades.
    *   Color-coded grade pills (Green for A, Yellow for C, etc.).
    *   Detailed course table layout.
*   Responsive Navigation:
    *   Unified Sidebar component across pages.
    *   Mobile-friendly toggle support.
*   Mock Authentication: secure-feeling login flow using student ID credentials.

---

## 4. Setup & Installation
Since this project uses vanilla web technologies, no compilation is required.

### Prerequisites
*   A modern web browser (Chrome, Edge, Firefox).
*   (Optional) VS Code with "Live Server" extension for best experience.

### Running Locally
1.  Clone the Repository:
    
    git clone <repository-url>
    
2.  Navigate to Source:
    
    cd student-grade-viewer-scm/src
    
3.  Launch Application:
    *   Method A (Recommended): Open login.html with "Live Server" in VS Code.
    *   Method B: Double-click login.html to open in your browser.

---

## 5. Contribution Guidelines
1.  Identify the Configuration Item (CI) you need to change.
2.  Create a branch for your fix or feature.
3.  Ensure backward compatibility with the existing students.json schema.
4.  Submit a Pull Request describing the detailed changes from the baseline.

---

Baseline Date: December 2025


