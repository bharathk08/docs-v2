---
title: 'Requirement Traceability Report'
description: 'View requirement coverage across test cases, test runs, and defects with the Requirement Traceability Report in Test Management by Testsigma.'
sidebar:
  order: 15.4
---

<br>

**Track requirement coverage and validation across test cases, runs, and defects.**

---

A Requirement Traceability Report provides clear visibility into how requirements are validated across test cases, test runs, and defects within a project. It establishes traceability between requirements and their test coverage and execution. Supported requirement sources include Jira, Linear, and ClickUp.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that test cases are generated from requirements, linked to test runs, and include execution results.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.40% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/npwa2l4koe9z?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Create a Requirement Traceability Report**

1. From the left navigation bar, go to **Reports**. 

2. Click **Create Report** on the top right corner. This will open the **Select Data for Visualisation** dialog. 

3. In the **Select Data for Visualisation** dialog, choose **Select Requirements** and click **Select Requirements**. 

4. On the **Add Test Requirements** page, 
   - Select the requirements to include in the report
   - Click **Attach Test Requirements**

5. Enter a **Title** and optional **Description**.

6. Click **Create a Report**.

7. The **Requirement Traceability Report** is created successfully.

8. Click **Share** on the top right corner of the report, enable **Anyone with the link can view**, and click **Copy** to share the report link. 

---

## **Report Structure**

### **Report Overview**

The report provides high-level visibility into:
- Requirement distribution by priority (**Critical**, **Major**, **Medium**, **Minor**)
- Test case count and automation coverage (**Manual** vs **Automated**)
- Traceability matrix mapping **Requirements > Test Cases > Test Runs**

### **Key Widgets**

**Requirements by Priority** <br>
Displays the total number of requirements categorized by business priority:
- **Critical**: Must-have functionality that blocks release if failed.
- **Major**: Core functionality that impacts primary workflows.
- **Medium**: Important but non-blocking enhancements.
- **Minor**: Optional or low-impact usability improvements.

**Test Case Count** <br>
Shows the total number of test cases linked to requirements, split by execution type:
- **Manual**: Test cases executed by users.
- **Automated**: Test cases executed via automation workflows.

**Traceability Matrix** <br>
The matrix provides bidirectional mapping between requirements and their test execution evidence.

| **Column**      | **Description** |
|-----------------|-----------------|
| **Requirement** | Requirement title or story summary. |
| **Test Cases**  | List of test case IDs linked to the requirement. |
| **Test Runs**   | Test run records showing execution timestamps and status tags (Tested or Untested). |

---