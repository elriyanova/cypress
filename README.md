# **Cypress Automation Tests**

This project contains end-to-end tests for logging in to the Pipedrive application using Cypress.

---

## **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or later)  
- **npm** (v6.x or later)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/elriyanova/cypress-e2e.git
cd cypress-e2e
```

### **2. Install Dependencies**
To install Cypress and other necessary dependencies, run:
```bash
npm install
```

### **3. Open Cypress Test Runner**
To launch Cypress in **interactive mode** (with UI):
```bash
npx cypress open
```
This will open Cypress and allow you to run the tests interactively by selecting them from the UI.

### **4. Run Tests in Headless Mode**
To run all tests without the UI (ideal for CI/CD pipelines):
```bash
npx cypress run
```
This will run the tests in the terminal, and you’ll see the results in the console output.

### **5. Run a Specific Test File**
To run a specific test file, use the `--spec` flag:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```
This will run the `login.cy.js` test file (or any other test file you specify).

---

## **Test Scenarios Covered**

1. **Login with correct email and correct password**  
2. **Login with incorrect email and incorrect password**  
3. **Login with correct email and incorrect password (Account locked case) Ideally should be added 3 attempts before verify, but I dont have an opportunity to unlock the account to make this test** 
4. **Empty fields verify**  

---

## **Project Commands**

Here are the key commands you can use:

- **Install dependencies**:  
  ```bash
  npm install
  ```

- **Open Cypress Test Runner** (UI mode):  
  ```bash
  npx cypress open
  ```

- **Run Cypress tests in headless mode** (for CI/CD):  
  ```bash
  npx cypress run
  ```

- **Run specific test file**:  
  ```bash
  npx cypress run --spec "cypress/e2e/login.cy.js"
  ```

- **Clear Cypress cache** (if necessary):  
  ```bash
  npx cypress cache clear
  ```

---

## **Additional Information**

- The tests are located in the `cypress/e2e/` folder.
- Page Object Model (POM) is used for better maintainability, with elements and actions abstracted in the `LoginPage.js` class.