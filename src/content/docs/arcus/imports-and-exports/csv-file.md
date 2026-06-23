---
title: 'Import Test Data from CSV Files'
description: 'Test Management by Testsigma allows you to quickly import test cases in CSV files into an existing project. This feature streamlines test case migration and bulk additions'
sidebar:
  order: 5.1
---

<br>

**Learn how to quickly import test cases in bulk using CSV files in Test Management by Testsigma for easy migration.**

---

Test Management by Testsigma allows you to quickly import test cases in CSV files into an existing project. This feature simplifies the migration process from other tools by enabling bulk test case imports. This article discusses how to import test cases using a CSV file.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that a Project and Folders are created in Testsigma. For more information, see [Projects](https://testsigma.com/docs/test-management/projects/manage-projects/) and [Organizing Test Cases](https://testsigma.com/docs/test-management/test-cases/folders/).

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/bnbndxesdokx?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Import Test Cases**

1. From the left navigation bar, go to **Import Cases**. This will open the **Import** section on **Project Settings**.

   Alternatively, click **Import** from the top-right corner of the **Dashboard**.
   ![Import from Quick Actions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Import_from_Quick_Actions.png)

2. Click **Import via CSV** and choose the template type:
   - **Steps**: For step-based test cases
   - **Document**: For document-style test cases

3. Click **Upload File** and select the CSV file.

---

## **Prepare and Import**

1. After uploading the CSV file, the **Uploaded File Preview** section opens.

2. Verify the file content and click **Next**.

3. In the **Map Properties and Values** section, you will see two panels:
   - **Map Properties** to map CSV columns
   - **Test Case Preview** to validate mapped data

4. Atto automatically maps CSV columns to the corresponding fields in Test Management by Testsigma.

5. Review the mapped fields. If any fields are missing or incorrectly mapped, update them manually.

6. Verify the mapped data in the **Test Case Preview** section.

7. Click **Begin Import** to start importing the test cases.

8. The system creates an import log in the **Imports** section to track progress and results.

---

## **View Import Results**

1. Once the import is complete, navigate to the **Imports** section and open the required import log.

2. The **Import Results** page displays a summary of the import, including:
   ![Import Results](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Import_Test_Cases_Results.png)
   - **Total Test Cases**
   - **Imported Test Cases**
   - **Skipped Test Cases**
   - **Failed Test Cases**

3. Review the **Failed to Import** section to identify test cases that were not imported.
   - Check the **Error Type and Reason** columns to understand the issue (for example, duplicate test case titles).

4. Review the **Skipped** section to see test cases that were ignored during import.
   - Reasons may include existing test cases in the project.

5. Review the **Imported Test Cases** section to verify successfully imported test cases along with their details.

6. Use this information to fix issues in your CSV file, if required, and re-import the test cases.


---