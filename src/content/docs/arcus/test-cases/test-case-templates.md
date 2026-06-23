---
title: 'Test Case Templates'
description: 'This article discusses Test Case Templates in Test Management by Testsigma | Managing test cases involves creating, editing, moving, and deleting them in test management'
sidebar:
  order: 3.3
---

<br>

**Learn how to use Documentation and Steps templates to create and manage test cases.**

---

Test Management by Testsigma tool allows you to create test cases using two templates:

### 1. **Documentation Template**

You can use the **Documentation Template** to create simple tests with basic preconditions, steps, and expected results.

### 2. **Steps Template**

You can use **Steps Template** when a more granular approach is necessary, breaking down each action and expected results.

Both templates allow you to attach files up to 25 MB, which enhances test documentation with relevant files for better clarity and context. This article discusses Test Case Templates in Test Management by Testsigma.

---

## **Structure of Documentation Template**

**1. Test Case Title**
A title that reflects the purpose of the test.

**2. Preconditions**
Provide any conditions that must be met before executing the test.

**3. Test Steps**
Provide a sequential, step-by-step list of actions that need to be performed during the test.

**4. Expected Results**
Define the expected outcome of each step or the overall outcome after executing all steps.

**5. Attachment Guidelines:**

- Attach files with a maximum size of 25MB.
- Files can include screenshots, logs, or relevant documents to the test scenario.

### **Example**

- **Test Case Title**: Login Functionality

- **Preconditions**: The user must have a valid username and password.

- **Test Steps**: - Navigate to the login page. - Enter the username and password. - Click on the 'Login' button.

- **Expected Results**: The user is redirected to the dashboard page.

---

## **Structure of Test Steps Template**

**1. Test Case Title:** A clear and descriptive title for the test scenario. <br>

**2. Test Steps:** Each test step should be outlined with specific actions, and for each step, an expected result must be clearly defined. <br>

**3. Expected Results:** Describe the result expected after each individual step is executed.<br>

**4. Attachment Guidelines:**

- Attach files with a maximum size of 25MB.
- Files can include screenshots, logs, or relevant documents to the test scenario.

### **Example:**

- **Test Case Title:** User Registration Flow

- **Preconditions:** User must be on the registration page and not logged in.

- **Test Steps:** - **Step 1**: Enter a valid email address and password in the registration form.<br>
  **Expected Result**: The email and password fields are correctly populated. - **Step 2**: Click the 'Submit' button.<br>
  **Expected Result**: User is directed to the confirmation page.

       - **Step 3**: Verify the confirmation message.<br>
       - **Expected Result**: A message confirming successful registration is displayed.

---
