---
title: 'Manage Test Runs in Jira App'
description: 'The Test Management by Testsigma app simplifies your workflow by allowing you to manage test runs & test case results directly within Jira.'
sidebar:
  order: 10.13
---

<br>

**Learn how to manage test runs and update test case status directly within Jira using Test Management by Testsigma.**

---

The Test Management by Testsigma app simplifies your workflow by allowing you to manage test runs and test case results directly within Jira. You can update test results, add or link defects, and manage linked test cases from within the Jira issue view.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that your Testsigma project is connected to a Jira project in Test Management by Testsigma.

---

## **View Linked Test Runs from Testsigma**

1. Open the Jira issue in a linked Jira project.

2. Click **Jira App Actions**, and then select **Test Management by Testsigma**.
   ![Testsigma App Connection](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Connect_Testsigma_to_Issue.png)

:::note[NOTE]
Test runs that include test cases associated with the Jira issue are automatically displayed.
:::

---

## **Update Test Case Results from Jira**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Click the **Status** next to the test case, and choose the appropriate result from the dropdown.
   ![Update Result](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Status_Dropdown_in_Jira.png)

4. Refresh the page to view the updated status in **Linked Test Cases**.

:::note[NOTE]
The test case status will also update in Test Management by Testsigma.
:::

---

## **Add Defects from the Jira App**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Click the **meatballs menu (⋯)** next to the test case, and click **Add defect**.
   ![Add defect](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Defect_from_Jira_TMS.png)

4. In the **Add Defect** dialog, the **Issue Type**, **Summary**, **Description**, and **Status** are automatically filled in by the Atto AI agent. If needed, edit the fields and click **Add**.
   ![Add Defect](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_defect_Button_Jira.png)

5. The defect is created and added to Jira.

---

## **Link Defects to Existing Issues**

1. In the Jira issue, go to **Test Management by Testsigma > Linked Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Linked_Test_Runs_In_Jira.png)

2. Expand the test run.

3. Select the **meatballs menu (⋯)** next to the test case, and click **Link a defect**.
   ![Link a defect](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_Defect_from_Jira.png)

4. In the **Link a Defect** dialog, select the existing issue to link from the **Bug/Defect** dropdown.
   ![Select Issue](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_defect_dialog.png)

5. Click **Link**.
   ![Link](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_defect_Button.png)

6. The defect is linked to the selected issue.

---