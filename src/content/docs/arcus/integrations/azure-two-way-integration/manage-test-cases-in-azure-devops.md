---
title: 'Manage Test Cases in Azure DevOps'
description: 'Test Management by Testsigma lets you create and manage tests directly in Azure DevOps, and edit or unlink them from linked work items.'
sidebar:
  order: 10.22
---

<br>

**Learn how to create, edit, and manage test cases directly within Azure DevOps using Test Management by Testsigma app.**

---

The Test Management by Testsigma simplifies your workflow by allowing you to create and manage test cases directly in Azure DevOps. You can also edit or unlink test cases from the associated work item.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
>
> - Your **Azure DevOps** project is linked to a Test Management by Testsigma project.
>
> - The **Testsigma for Azure DevOps** extension is installed and authorized.

---

## **View Linked Test Cases from Azure DevOps**

1. Sign in to **Azure DevOps** and navigate to your project.

2. Go to **Boards > Work items**.
![Work Items](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_1.png)

3. Open the required work item.
![required work item](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_2.png)

4. In the work item details page, click the **Test Management by Testsigma** tab.
![TMS tab](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_3.png)

5. View the linked test cases associated with the work item.
![work items](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_4.png)

:::note[NOTE]
- Test cases generated and accepted using AI in TMS are automatically reflected in this tab once the Azure DevOps project is linked.
:::

---

## **Create a New Test Case from Azure DevOps**

1. In the **Azure DevOps** issue, go to the **Test Management by Testsigma > Linked Test Cases**.
![work items](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_4.png)

2. Click **Create**. This opens the **Create Test Case** dialog.
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_5.png)

3. Enter a **Title** and an optional **Description**.
![Description](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_6.png)

4. Under **Test Case Properties**, select a template type and any additional properties.
![Test Case Properties](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_7.png)

5. Add **Preconditions**, **Steps**, and **Expected Results**.
![Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_8.png)

6. Select a folder where the test case will be stored upon creation.
![Folder](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_9.png)

7. Click **Create** to save and add the test case.
![Create](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_10.png)

8. The new test case appears in the list view.

---

## **Link Test Cases from Azure DevOps**

1. In the **Azure DevOps** issue, go to the **Test Management by Testsigma > Linked Test Runs**.
![work items](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_4.png)

2. Click **Link**. This will open the **Add Test Cases** dialog.
![Link](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_11.png)

3. Browse through the folder structure to view available test cases.
![Folder](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_12.png)

4. Select the test cases, and then click **Add** to link them to the Azure DevOps issue.
![Add](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_13.png)

---

## **Edit a Test Case from Azure DevOps**

1. In the **Azure DevOps** issue, go to the **Test Management by Testsigma > Linked Test Cases**.
![work items](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_4.png)

2. Click the **meatballs menu (⋯)** next to the test case, and select **Edit** from the dropdown.
![Azure DevOps Linked test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_14.png)

3. Update the **Name**, **Preconditions**, **Steps**, **Folder**, **Properties**, or other fields as needed.

4. Click **Update** to save your changes.
![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_15.png)

:::note[NOTE]
- To unlink the test case from the **Azure DevOps** issue, click **Link Off** from the same dropdown menu.
![Link Off](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_link_test_case_16.png)
:::

---