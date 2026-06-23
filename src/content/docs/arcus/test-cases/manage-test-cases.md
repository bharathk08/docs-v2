---
title: 'Test Cases: The Core of Testing'
description: 'This article discusses managing test cases in Test Management by Testsigma | Managing test cases involves creating, editing, moving, and deleting them in test management'
sidebar:
  order: 3.2
---

<br>

**Learn how to create, organize, and maintain test cases in Test Management by Testsigma.**

---

A test case defines a specific scenario to be tested, including detailed steps, preconditions, expected results, and other relevant information. Test cases are stored in a repository and structured in a hierarchical tree format, with folders and subfolders for better organization.

Managing test cases involves creating, editing, moving, and deleting them. This article discusses how to manage test cases in test management.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that a [Project](https://testsigma.com/docs/test-management/projects/manage-projects/) and [Folders](https://testsigma.com/docs/test-management/test-cases/folders/) are created in Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/yezyzhuzvhrx?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Create Test Cases**

1. From the **Dashboard**, go to **Test Cases** and click **+ Create**.

   Alternatively, click the kebab menu (three dots) next to the **Folder/Sub Folder** and select **Create Testcase** from the dropdown menu.

2. On the **Modal Dialog** that appears: 
   - Enter a **title** and an optional **description**.
   - Choose a **template type** from the dropdown menu.
   - Click **Folder** and choose a location for the test case in the overlay, then click **Select Folder**.
   - Select any additional properties to further organize your test case.
   - Click **Create**

4. On the test case details page, add your test steps. The actions will auto-save.

:::note[NOTE]
You can also select properties in the **Test Case Properties** section.
:::

---

## **Test Case Properties**

The following properties help you classify and organize test cases:

- **Location**: The folder where the test case will be stored upon creation.

- **Priority**: Defines the urgency and execution order of the test case.

- **Owner**: The team member responsible for the test case.

- **Reviewer**: The team member who will review the test case.

- **Automation Type**: Specifies the automation status of the test case: 
     - **Automated** 
     - **Not Automated** 
     - **Automation Not Required** 
     - **Can’t Be Automated** 
     - **Obsolete**

- **Status**: The current state of the test case in the testing lifecycle (e.g., **Draft, Active, In Progress, Outdated**).

- **Test Case Type**: Defines the type based on the test case's purpose and testing approach (e.g., **Functional, Regression, Smoke**, etc.).

- **Requirements**: Link Jira stories from here.

- **Labels**: Link labels from the dropdown menu.

**Attachments**: You can add files that support your test case from here. 

:::note[NOTE]
The **Test Case Properties** are editable under **Settings > Manage Properties**.
:::

---

## **Edit Test Cases**

1. From the **Dashboard**, go to **Test Cases** and click any test case from the **Test Case List** section to open the **Quick View** overlay.

2. In the **Quick View** overlay, click the **Edit** icon.

3. Update the **Test Case Name**, **Test Steps**, **Folder**, **Properties**, and any other necessary fields.

4. The test case will be auto saved.

   Alternatively, you can click the kebab menu corresponding to the test case and select **Edit** from the dropdown menu to make changes.

---

## **Reorder Test Cases**

1. From the **Dashboard**, go to **Test Cases**.

2. Click the folder containing the test cases.

3. For the target test case, use **Drag Handle** to reorder.

4. The new position is reflected immediately at the folder level.


:::note[NOTE]

- Reordering is limited to a single folder at a time.
- If multiple folders are selected, the reorder option is disabled.
- If any filters are active, reordering is disabled.
:::

5. The updated sequence is also reflected in all related test runs.

---

## **Delete Test Cases**

1. From the **Dashboard**, go to **Test Cases**.

2. Click the kebab menu corresponding to the test case and select **Delete** from the dropdown menu.

3. On the **Delete Test Case?** dialog, click **Delete Test Case** to confirm deletion.

---

## **Bulk Actions on Test Case List**

1. From the **Dashboard**, go to **Test Cases**.

2. Press **Command + K**, then select **Bulk Update Test Cases** from the **Testsigma Command Center**.

3. Perform bulk actions such as:
   
   - Change test case properties
   
   - Move test cases to a different folder
   
   - Delete multiple test cases at once

---