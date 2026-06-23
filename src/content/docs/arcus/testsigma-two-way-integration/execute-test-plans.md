---
title: 'Execute Test Plans from Test Management by Testsigma'
description: 'You can execute test plans in Testsigma directly from Test Management by Testsigma | Learn how to execute test plans of Testsigma from Test Management by Testsigma.'
sidebar:
  order: 11.7
---

<br>

**This integration lets you execute test plans in Testsigma from Test Management by Testsigma & automatically retrieves machine-level reports for each run.**

---

You can execute test plans in Testsigma directly from Test Management by Testsigma. When you trigger an execution, Test Management by Testsigma creates a separate test run for each machine and imports machine-level reports, including the link to the result page. This article discusses executing Test Plans from Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that the test plans are linked between Test Management by Testsigma and Testsigma.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.40% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/tfndyujh3e3f?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>


---

## **Execute a Linked Test Plan in Test Management by Testsigma**

1. Create or open the test plan you want to execute in Test Management by Testsigma.

2. In the test plan details page, under **Testsigma Automated Test Plan**, click **Link a Test Plan** if the plan is not yet linked.

3. In the **Link Testsigma Automated Test Plan** dialog:
   - Select the Testsigma's **Project**, **Application**, and **Version**.
   - Select a **Test Plan**.
   - Click **Link**.

4. After linking, click the **Play icon** next to the linked **Testsigma Automated Test Plan** to trigger execution.

2. After execution completes in Testsigma, Test Management by Testsigma automatically creates a test run for each machine with the associated test cases.

3. Open the test run in the test plan to view execution details. The run includes links to the individual test case results pages for each executed test case.

:::note[NOTE]
Each trigger creates a new test run for every machine in the linked test plan.
:::

---

## **View Automated Reports in Test Management by Testsigma**

1. From the left navigation bar, go to **Test Plans**.

2. Open the test run in the test plan to view execution details.

3. The right panel displays a concise summary of the test run.

4. Click any test case in the test run to open an overlay showing test case details and activity.

5. Scroll to the **Activity** section to view detailed execution information, including a link to the Testsigma results page for the automated execution.
   ![Activity](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Activity_Details_of_Execution.png)

---