---
title: 'Link Test Cases Between Test Management by Testsigma & Testsigma'
description: 'Two-way test case sync ensures consistent traceability & seamless alignment between Test Management by Testsigma and Testsigma.'
sidebar:
  order: 11.3
---

<br>

**This integration provides two-way linking of test cases, ensuring a single, synchronized source of truth across manual and automated tests.**

---

You can link test cases between Test Management by Testsigma  and Testsigma to maintain a single, synchronized source of truth for all your tests.

Manual test cases created in Test Management by Testsigma can be directly pushed to Testsigma as automated test cases. Similarly, automated test cases in Testsigma can be pushed to Test Management by Testsigma as manual test cases with detailed steps.

This two-way linkage eliminates redundancy, improves traceability, and ensures alignment between manual and automated testing efforts across both systems.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that the integration between Testsigma and Test Management by Testsigma is enabled and that test cases are available in both systems.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.59% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/1glcrse4npum?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Link Test Cases in Test Management by Testsigma**

1. From the **Dashboard**, go to **Test Cases**.

2. Select the folder and open the test case you want to link with Testsigma.

3. In the right panel, click **Link a Test Case**. This will open **Link Testsigma Automated Test Case** dialog.

4. In the **Link Testsigma Automated Test Case** dialog:
   - Select the Testsigma’s **Project**, **Application**, and **Version**.
   - Select the test cases you want to link with the Test Management test case.
   - Click **Link**.

5. Verify the linked test cases in the **Testsigma Automated Test Case** section of the right panel.

:::note[NOTE]
You can also verify the linked cases in **Testsigma** by navigating to **Test Cases > Open the linked Test Case > Manage Test Case** and confirm the linked **Test Management test case** under **Test Management Tool**.
:::

---

## **Link Test Cases in Testsigma**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Open the test case you want to link in Testsigma and select **Manage Test Case** from the **Utility Panel**.

3. Click **+ Link New Tests**. This will open **Link Test Case** dialog.

4. In the **Link Test Case** dialog:
   - Select **Testsigma Test Management** as the **Test Management Tool**.
   - Select a **Test Management Project**.
   - Select the test case you want to link.
   - Click **Link Test Case**.

**💡 Tip:** To link multiple test cases, turn on the **Link Multiple** toggle and select multiple test cases.

:::note[NOTE]
You can also verify the linked cases in Testsigma Test Management by navigating to **Test Cases > Open the linked Test Case > Edit Test Case** and confirm the linked test case under **Testsigma Automated Test Case**.
:::

---