# Project 5: Full-Stack QA Testing - OrangeHRM Employee Management

## 👋 Overview
This project demonstrates a complete QA testing workflow covering manual testing, API testing, test design techniques, mobile responsiveness, exploratory testing, and test automation. I tested the OrangeHRM Demo application's employee management features using industry-standard tools and methodologies.

**Application Under Test:** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)  
**Tester:** Oshini Poornima  
**GitHub:** [github.com/OshiniPoornima](https://github.com/OshiniPoornima)  
**Duration:** January 2026 (1 week)  
**Tools Used:** Chrome DevTools, Postman, Playwright, JavaScript, Google Sheets, Google Docs

---


## 📋 Project Structure
~~~
Project-5-Full-Stack-QA/
│
├── Manual_Testing/
│   ├── Test_Cases.xlsx
│   ├── Test_Summary_Report.pdf
│   └── screenshots/
│       ├── TC-04_Add_Employee_Success.png
│       └── TC-05_Required_Field_Error.png
│
├── API_Testing/
│   ├── API_Test_Report.pdf
│   └── screenshots/
│       ├── API_Test_1_GET_All_Employees.png
│       ├── API_Test_2_GET_Single_Employee.png
│       ├── API_Test_3_Negative_Test_404.png
│       ├── API_Test_4_POST_Create_Employee.png
│       └── API_Test_5_DELETE_Employee.png
│
├── Test_Design_Techniques/
│   ├── BVA_EP_Test_Plan.xlsx
│   └── screenshots/
│       └── BVA_EP_Test_Plan.png
│
├── Mobile_Testing/
│   ├── Mobile_Responsiveness_Tests.xlsx
│   └── screenshots/
│       ├── Mobile_Test_iPhone_SE.png
│       ├── Mobile_Test_Android.png
│       └── Mobile_Responsiveness_Results.png
│
├── Exploratory_Testing/
│   ├── Exploratory_Session_Notes.pdf
│   └── screenshots/
│       └── Exploratory_Testing_Session.png
│
├── Automation/
│   ├── login_test.js
│   ├── e2e_employee_creation_FINAL.js
│   └── screenshots/
│       ├── Automation_Success_Output.png
│       └── Automation_E2E_Code.png
│
└── README.md

~~~
---

## 🎯 Testing Phases Completed

### 1️⃣ Manual Testing
**Objective:** Verify core employee management functionality through structured test cases

**What I Did:**
- Created 5 comprehensive manual test cases covering login, navigation, and add employee workflows
- Executed all test cases on OrangeHRM Demo application
- Documented actual vs expected results for each test
- Generated professional test summary report

**Key Results:**
- Total Tests: 5
- Pass Rate: 100%
- Critical flows validated: Login (valid/invalid), Add Employee, Form validation

**Deliverables:**
- Manual test cases spreadsheet with 8 columns
- Test Summary Report with findings and recommendations

---

### 2️⃣ API Testing with Postman
**Objective:** Validate backend employee API endpoints and response handling

**API Endpoints Tested:**
1. **GET /api/v1/employees** - Retrieve all employees (200 OK ✓)
2. **GET /api/v1/employee/{id}** - Retrieve single employee (200 OK ✓)
3. **GET /api/v1/employee/999999** - Non-existent resource (200 OK with null - design issue found)
4. **POST /api/v1/create** - Create new employee (200 OK ✓)
5. **DELETE /api/v1/delete/{id}** - Delete employee (200 OK ✓)

**Key Findings:**
- ✅ All CRUD operations functional
- ⚠️ Found API design issue: Returns 200 OK instead of 404 Not Found for non-existent resources
- ✅ Response structure consistent across endpoints

**Deliverables:**
- Postman collection with 5 API tests
- API Test Report with detailed findings
- 5 screenshots showing request/response for each test

---

### 3️⃣ Test Design Techniques (BVA & EP)
**Objective:** Apply advanced testing techniques to reduce test cases while maintaining coverage

**What I Did:**
- Applied **Boundary Value Analysis (BVA)** to Employee ID field
- Applied **Equivalence Partitioning (EP)** to First Name field
- Created 8 strategic test cases instead of 100+ exhaustive tests

**Impact:**
- Reduced test cases by 80% through smart technique application
- Focused testing on high-risk boundaries where bugs typically hide

**Deliverables:**
- BVA/EP Test Plan with 8 strategic test cases
- Documentation explaining technique rationale

---

### 4️⃣ Mobile Responsiveness Testing
**Objective:** Verify application functions correctly across different devices and screen sizes

**Devices Tested:**
- iPhone SE (375 x 667 px) - Portrait & Landscape
- iPad Air (820 x 1180 px)
- Pixel 7 (412 x 915 px)

**Key Findings:**
- ✅ Responsive design works well across devices
- ✅ Navigation accessible via hamburger menu on mobile
- ✅ Form fields properly sized for mobile input

**Deliverables:**
- Mobile test results spreadsheet (5 device tests)
- Device screenshots showing responsive layouts

---

### 5️⃣ Exploratory Testing
**Objective:** Discover bugs through unscripted, time-boxed exploration

**Charter:** *"Explore the Leave Management module and identify workflow issues"*

**Session Details:**
- Duration: 20 minutes (time-boxed)
- Approach: Charter-based exploratory testing

**Bugs Found:**
1. **Major Bug:** System accepts past dates without validation
2. **Major Bug:** Backwards dates allowed (To Date before From Date)
3. **Major Bug:** Duplicate overlapping leave requests accepted

**Deliverables:**
- Exploratory Testing Session Notes with timestamped findings
- Bug reports with severity ratings and business impact analysis

---

### 6️⃣ Test Automation with Playwright + JavaScript
**Objective:** Automate critical user flows to enable regression testing

**What I Automated:**
1. **Login Test:** Validates user authentication
2. **E2E Employee Creation:** Complete 8-step workflow from login to verification

**E2E Automation Flow:**
1. Navigate to OrangeHRM
2. Login with credentials
3. Navigate to PIM module
4. Click Add Employee
5. Fill employee details
6. Click Save
7. Verify employee created
8. Capture screenshot evidence

**Key Achievement:**
- Successfully automated 8-step business workflow
- Script runs in ~20 seconds vs 3-5 minutes manual testing
- 90% time savings for regression testing

**Deliverables:**
- `login_test.js` - Basic authentication automation
- `e2e_employee_creation_FINAL.js` - Complete E2E workflow
- Screenshots showing successful test execution

---

## 💼 Skills Demonstrated

✅ Manual Testing & Test Case Design  
✅ API Testing (RESTful APIs, Postman)  
✅ Test Automation (Playwright, JavaScript, Node.js)  
✅ Test Design Techniques (BVA, Equivalence Partitioning)  
✅ Mobile/Responsive Testing (Chrome DevTools)  
✅ Exploratory Testing (Time-boxed, Charter-based)  
✅ Bug Reporting & Severity Assessment  
✅ Technical Documentation  

---

## 📊 Project Statistics

- **Total Test Cases:** 18 (5 manual + 8 BVA/EP + 5 mobile)
- **API Tests:** 5
- **Bugs Found:** 4
- **Automation Scripts:** 2 (100+ lines)
- **Devices Tested:** 5 configurations
- **Screenshots:** 14 (2 manual + 5 API + 1 BVA/EP + 3 mobile + 1 exploratory + 2 automation)
- **Pass Rate:** 100%

---

## 🛠️ Tools & Technologies

| Category | Tools |
|----------|-------|
| **Browsers** | Chrome, Chrome DevTools |
| **API Testing** | Postman |
| **Automation** | Playwright, JavaScript, Node.js |
| **Documentation** | Google Sheets, Google Docs |
| **Version Control** | Git, GitHub |

---

## 🚀 How to Run Automation Scripts

### Prerequisites
```bash
npm install playwright
```

### Running Tests
```bash
node login_test.js
node e2e_employee_creation_FINAL.js
```

---

## 🎓 Key Learnings

1. **Test Design Efficiency:** BVA and EP techniques reduced test cases by 80%
2. **API vs UI Testing:** Backend validation differs from frontend
3. **Exploratory Value:** Found 3 major bugs that structured testing missed
4. **Automation Timing:** Handled flakiness using explicit waits
5. **Mobile-First Thinking:** Desktop UX ≠ Mobile UX

---

## 📈 Impact

- **Time Investment:** ~15-20 hours
- **Automation ROI:** 90% time savings
- **Bugs Found:** 4 critical issues

---

## 📞 Contact

**Oshini Poornima**  
GitHub: [github.com/OshiniPoornima](https://github.com/OshiniPoornima)

---

## 📝 License

This project is for portfolio and educational purposes. OrangeHRM Demo is a publicly available application for testing practice.


---
