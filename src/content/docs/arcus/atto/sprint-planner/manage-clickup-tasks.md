---
title: 'Sprint Planner for ClickUp Tasks'
description: 'You can generate test cases instantly by integrating ClickUp with Test Management by Testsigma. Atto detects tasks from ClickUp, displays them and sprint planner generate tests'
sidebar:
  order: 14.13
---

<br>

**Quickly turn ClickUp Tasks into ready-to-run test cases with minimal effort.**

---

You can generate test cases automatically by integrating ClickUp with Test Management by Testsigma. Atto detects Lists/Sprints from ClickUp and displays them on Atto's Home. You can activate a List/Sprint and select artifacts from ClickUp to generate test cases. This article discusses using ClickUp Lists/Sprints to generate test cases in Test Management by Testsigma automatically.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure:
> - You have a project created in Test Management by Testsigma.
> - The project is connected to a ClickUp Space.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/qfdsbxor5qz1?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Attach a ClickUp Space**

1. On the **Dashboard**, click the **Candy Box** icon, and then select **+ New Project**.

2. In the **Create a New Projec**t dialog, enter the **Project Name**, **Description**, and **Project Key**.

3. Click **Link ClickUp Space** under **Project Management Tool** and select the **ClickUp Space** you want to attach.

Alternatively, you can also attach the **ClickUp Space** from the **Project Settings** overlay. 

---

## **View and Activate ClickUp Lists/Sprints in Atto**

1. From the **Dashboard**, click **Atto’s Home**.

2. Atto’s Home displays two sections:
   - **Active Lists**: Displays all activated lists/sprints. Click a list/sprint to view its details and the tests generated from it.
   - **Other Lists**: Displays additional lists/sprints.

3. Go to the **Other Lists** tab to view all lists/sprints from your ClickUp Space.

4. In the **Other Lists** tab, you can see the following tabs:
   ![Other ClickUp Lists](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ClickUp_Lists_TMS.png)
   - **Inactive**: Displays lists/sprints that are imported from ClickUp but are not yet active in Testsigma. You can activate these lists/sprints for test case generation. 
   - **Completed**: Displays lists/sprints that were previously activated and done with the test case generation.
   - **Deleted**: Displays lists/sprints that are deleted in the ClickUp Space. 
   
   Use these filters to easily find the lists/sprints you need based on their current workflow status.

5. Review the lists/sprints. Each card shows the **List ID, Name, Number of tasks waiting for test generation**, and the **Last Updated Date**.

6. Select a list/sprint to view all the tasks associated with it. The list view shows the following details:
   - List/sprint **Name** 
   - Tabs to filter stories by status: **All**, **To Do**, **In Progress**, and **Done**
   - Search by title box to find a specific task
   - Task list with **ID**, **Title**, and **Current Status** (e.g., **To Do**)

7. Click **Activate** next to the list for which you want to generate test cases.


---

## **View List/Sprint Details and Generate Test Cases**

1. Once you activate a list/sprint, Atto displays the details.

2. When the list/sprint status changes to **In Progress**, you can view key metrics, including: <br>
   a. **Name**<br>
   b. Completion percentage bar<br>
   c. Number of tasks in **To Do**, **In Progress**, **Done**, and **Modified** states<br>
   d. Search box to find stories by title<br>
   e. Task list showing **ID**, **Title**, and **Current Status**

   ![ClickUp Tasks](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ClickUp_In_Progress_Tasks.png)

3. Atto automatically updates the task status to **In Progress** for the task currently being processed for test case generation.

:::note[NOTE]
You can use the **tabs** to filter tasks by their status or use the **Search** box to find a specific task.
:::

4. Click a task to open its details page. The page displays multiple scenarios and the test cases generated from the task data.

5. Expand a scenario to view its associated test cases.

6. Click a generated test case to view its details, including:
   - **Preconditions**
   - **Test steps**
   - **Expected results**

7. Review the test case and select the folder where you want to save it.

8. Click **Accept** to add the test case to the selected folder.

9.  Repeat steps 6–8 to review and save other generated test cases.

10. When test case generation completes for the current task, Atto automatically sets the next task status to **In Progress**.

11. Repeat these steps for each task in the list.

---