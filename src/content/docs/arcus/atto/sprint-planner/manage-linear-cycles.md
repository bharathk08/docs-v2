---
title: 'Sprint Planner for Linear Test Cycles'
description: 'You can generate test cases instantly by integrating Linear with Test Management by Testsigma. Atto detects cycles from Linear, displays them and sprint planner generate tests'
sidebar:
  order: 14.12
---

<br>

**Quickly turn Linear issues into ready-to-run test cases with minimal effort.**

---

You can generate test cases automatically by integrating Linear with Test Management by Testsigma. Atto detects cycles from Linear and displays them on the Atto’s Home. You can activate a cycle and select artifacts from Linear to generate test cases. This article discusses using Linear Cycles to generate test cases in Test Management by Testsigma automatically.

The **Sprint Planner Agent** helps you manage and organize your Linear cycles in Testsigma, while the **Generator Agent** automatically generates test cases from selected cycle issues. This article explains how to use these agents together for a seamless test creation workflow.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure:
> - You have a project created in Test Management by Testsigma.
> - The project is connected to a Linear project.
> - You know how to create WebHooks in Linear to enable real-time sync between Linear and Test Management by Testsigma. For more information, see [Creating WebHooks in Linear](https://linear.app/developers/webhooks).

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.63% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/hjrhvejb216u?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>


---

## **Attach a Linear Project** 

1. On the **Dashboard**, click the **Candy Box** icon, and then select **+ New Project**.

2. In the **Create a New Project** dialog, enter the **Project Name**, **Description**, and **Project Key**.

3. Click **Link Linear Project** under **Project Management Tool** and select the Linear project you want to attach.

   Alternatively, you can also attach the Linear project from the **Project Settings** overlay. 

---

## **View and Activate Linear Cycles in Atto**

1. From the **Dashboard**, click **Atto’s Home**.

2. **Atto’s Home** displays two sections:
   - **Active Cycles**: Lists activated cycles. Click a cycle to view cycle details and generated tests.
   - **Other Cycles**: Lists additional cycles from Liner.

3. Go to the **Other Cycles** tab to view all cycles from your Linear project.

3. In the **Other Cycles** tab, you can see the following tabs:
   ![Other Cycles](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Linear_Other_Cycles.png)
   - **Inactive**: Displays cycles that are imported from Linear but are not yet active in Testsigma. You can activate these cycles for test case generation.
   - **Completed**: Displays cycles that were previously activated and done with the test case generation.
   - **Deleted**: Displays cycles that are deleted in the Linear project.

   Use these filters to easily find the cycles you need based on their current workflow status.

4. Review the list of cycles. Each cycle card shows the **Cycle ID**, **Name**, **Number of stories** waiting for test generation, and the **Last Updated Date**.

5. Select a cycle to view the list of stories associated with that cycle. The cycle view shows the following details:
   ![Cycle Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Linear_Cycle_Details.png)
   a. Cycle **Name** and **Duration**
   b. Tabs to filter stories by status: **All Stories, To Do, In Progress**, and **Done**
   c. Search by title box to find a specific story
   d. Story list with **ID, Title,** and **Current Status** (e.g., To Do)

6. Click **Activate** next to the cycle for which you want to generate test cases.

---

## **View Cycle Details and Generate Test Cases**

1. Once you activate a cycle, Atto displays the cycle details.

2. You can view high-level metrics, including: 
   - Number of stories in **To Do**, **In Progress**, **Done**, and **Modified** states.
   - A tabbed view that lets you filter stories by status.

3. Click on any issue to start AI-powered test case generation

4. Atto generates multiple test cases using the data from the selected issue.

5. Click on any test case to view details such as preconditions, test steps, and expected results.

6. Review the test case and select the folder where you want to save it.

7. Click **Accept** to add the test case to the selected folder.

8. Repeat steps 5–7 to review and save other generated test cases.

9.  Atto automatically sets the story status to **In Progress** once test case generation completes.

10. Repeat these steps for each issue in the cycle.

---