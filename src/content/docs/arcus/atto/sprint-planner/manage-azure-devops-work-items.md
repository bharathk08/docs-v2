---
title: 'Sprint Planner for Azure DevOps Work Items'
description: 'Integrate Azure DevOps with Testsigma to auto-generate test cases from sprints using Atto’s Sprint Planner and Generator Agents.'
sidebar:
  order: 14.14
---

---

<br>

**Quickly turn Azure DevOps sprint work items into ready-to-run test cases with minimal effort.**

---

You can generate test cases automatically by integrating Azure DevOps with Test Management by Testsigma. Atto detects sprints from Azure DevOps and displays them on the Atto Home. You can activate a sprint and select work items to generate multiple test cases with just a few clicks.

The Sprint Planner Agent helps you manage and organize your Azure DevOps sprints in Testsigma, while the Generator Agent automatically generates test cases from selected sprint work items. This article explains how to use these agents together for a seamless test creation workflow.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure:
>
> - You have a project created in Test Management by Testsigma.
> - The project is connected to an Azure DevOps project.
> - You have sufficient permissions in Azure DevOps to authorize the integration with Test Management by Testsigma. 
> - You have configured the required service hooks in Azure DevOps to enable real-time synchronization between Azure DevOps and Test Management by Testsigma.

---

## **Attach an Azure DevOps Project**

1. On the **Dashboard**, click the **Candy Box** icon, and then select **+ New Project**. 

2. In the **Create a New Project** dialog, enter the **Project Name**, **Description**, and **Project Key**. 

3. From the **Project Management Tool** dropdown, select the project you want to attach. 

   Alternatively, you can also attach the Azure DevOps project from the **Project Settings** overlay. 
   ![Project Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_1.1.png)

---

## **View & Activate Azure DevOps Sprints in Atto**

1. On the **Dashboard**, click **Atto’s Home**.

2. Go to the **Other Sprints** tab to view all available sprints from your Azure DevOps project.

3. In the **Other Sprints** tab of **Atto’s Home**, you can see the following tabs:
   ![Other Sprints](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_1.2.png)

   - **Inactive:** Displays sprints that are imported from Azure DevOps but are not yet active in Testsigma. You can activate these sprints for test case generation.
   - **Completed:** Displays sprints that were previously activated and done with the test case generation.
   - **Deleted:** Displays sprints that are deleted in the Azure DevOps project.

   Use these filters to easily find the sprints you need based on their current workflow status.

4. Review the list of sprints. Each sprint card shows the **Sprint ID**, **Name**, **Number of stories** waiting for test generation, and the **Last Updated Date**.

5. Select a sprint to view the list of stories associated with that sprint. The sprint view shows the following details:

   **a.** Sprint **Name** and **Duration**.

   **b.** Tabs to filter stories by status: **All Stories**, **To Do**, **In Progress**, and **Done**.

   **c.** Search by title box to find a specific story.

   **d.** Story list with **ID**, **Title**, and **Current Status** (e.g., **To Do**).
   ![List of stories](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_1.3.png)

6. Click **Activate** next to the sprint for which you want to generate test cases

---

## **View Speint Details & Generate Test Cases**

1. Once you activate a sprint in **Azure DevOps**, Atto detects and displays sprint details in a pop-up in Test Management by Testsigma.

:::note[NOTE]
- At this stage, the **Generator Agent** takes over and starts generating test cases automatically based on the selected user stories. You can review, edit, and organize these cases before saving them.
:::

2. Click **Start Generating Tests** to start generating tests for the attached stories.
   ![Start Generating Tests](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_1.png)

3. Once the **Sprint** moves to **In Progress**, you can view high-level metrics, including:

   **a.** Sprint **Name**.

   **b.** A completion percentage bar.

   **c.** Number of stories in **To Do**, **In Progress**, **Done**, and **Modified** states.

   **d.** Search by title box to find a specific story.

   **e.** Story list with **ID**, **Title**, and **Current Status** (e.g., **To Do**).
   ![Hig-level metrics](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_2.png)

4. Atto starts generating test cases using the data from the selected story.

5. Click on any test case to view details such as preconditions, test steps, and expected results.

6. Review the test case and select the folder where you want to save it.

7. Click **Accept** to add the test case to the selected folder.

8. Repeat steps 5–7 to review and save other generated test cases.

9. Atto automatically sets the story status to **In Progress** once test case generation completes.

10. Repeat these steps for each story in the sprint.

---

## **Synchronization of Azure DevOps Actions in Test Management**

Atto automatically updates work item statuses based on sprint activity and user actions in Azure DevOps. The following statuses help you track progress throughout the sprint lifecycle.

**1. Sprint Activation**  <br>

When you activate a sprint in Azure DevOps, Atto detects and displays sprint details in a popup in Test Management by Testsigma.
![Start Generating Tests](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_1.png)

**2. Work Item Modification**  <br>

When a work item is updated after test generation, Atto marks it as **Modified**. A **Modified** label appears next to the work item in the sprint view. 
![Modified](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_3.png)

**3. Accepting & Refining Test Cases**   <br>

When a test case is generated, you can review and refine it using AI. After finalizing the test case, click **Accept** to save it.
![Accept](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_4.1.png)

**4. Sprint Completion**   <br>

When the sprint is closed in Azure DevOps, a **Sprint Closed in Azure devops** pop-up appears. Click **Mark as Done** to close the sprint in Test Management by Testsigma.
![Sprint Completion](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_5.png)

**5. Sprint Deletion in Azure DevOps**

If a sprint is deleted in Azure DevOps, a **Sprint Deleted in Azure devops** pop-up appears in Atto. The sprint becomes read-only,  you can view the content, but cannot make changes.
![Sprint Deletion](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_6.png)

**6. Story Movement Between Sprints**   <br>

If a story is moved from one sprint to another, Atto displays a **work item Moved** label and shows a pop-up indicating the change.
![Story Movement](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_7.png)

**7. Story Deletion from Sprint**

When a story is deleted from a sprint, it is only available in **View Mode**. Any test cases already generated for the story remain visible and accessible.
![Story Deletion](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tms_sprint_8.png)

---