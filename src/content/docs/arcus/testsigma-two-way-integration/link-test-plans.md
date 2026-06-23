---
title: 'Link Test Plans Between Test Management by Testsigma & Testsigma'
description: 'The Test Management by Testsigma & Testsigma integration streamlines execution by connecting test plans between both systems & providing centralized access to detailed results.'
sidebar:
  order: 11.6
---

<br>

**This integration links test plans across both products, allowing you to execute them in Testsigma and review detailed results.**

---

You can link test plans between Test Management by Testsigma and Testsigma to execute test plans in Testsigma directly from Test Management by Testsigma. Once the execution is complete, you can view machine-level reports with logs and screenshots. This article discusses linking test plans between Test Management by Testsigma and Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that the integration between Testsigma and Test Management by Testsigma is enabled and that test plans are available in both systems.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/tlhrchasmohp?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Link Test Plans in Test Management by Testsigma**

1. From the **Dashboard**, go to **Test Plans**.

2. Create or open the test plan you want to link with Testsigma.

3. In the test plan details page, under **Testsigma Automated Test Plan**, click **Link a Test Plan**. This will open **Link Testsigma Automated Test Plan** dialog.

4. In the **Link Testsigma Automated Test Plan** dialog:
   - Select Testsigma's **Project**, **Application**, and **Version**.
   - Select a **Test Plan**.
   - Click **Link**.

5. Verify the linked plan in Testsigma by opening the corresponding Testsigma plan and confirming that the Test Management test plan is listed under **Test Management Tool** in the **Test Plan Details** overlay.

---

## **Link Test Plans in Testsigma**

1. From the left navigation bar, go to **Test Plans**.

2. Open the test plan you want to link with Test Management by Testsigma, and click **Test Plan Details** from the **Utility Panel**.

3. Click **+ Link New Plans** and select **Testsigma Test Management**. The **Link Test Plan** dialog opens.

4. In the **Link Test Plan** dialog:
   - Select **Testsigma Test Management** as the **Test Management Tool**.
   - Select a **Test Management Project**.
   - Select the test plan you want to link.
   - Click **Link Test Plan**.

5. Verify the linked plans in **Testsigma Test Management** by navigating to **Test Plans > Open the linked Test Plan > Edit Test Plan**, and confirming the linked plan under **Testsigma Automated Test Plan**.

---