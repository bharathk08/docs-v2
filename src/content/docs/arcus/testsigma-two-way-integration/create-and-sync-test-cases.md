---
title: 'Create & Sync Test Cases from Testsigma’s Atto’s Home'
description: 'Create & sync AI-generated test cases from Atto’s Home directly to Test Management by Testsigma. This article explains how to generate & sync Atto’s test cases into TMS.'
sidebar:
  order: 11.5
---

<br>

**Create and sync AI-generated test cases from Atto’s Home directly to Test Management by Testsigma.**

---

You can sync newly generated test cases from Testsigma’s Atto’s Home to Test Management by Testsigma. Once the NLP steps are generated for AI-generated test cases in Atto’s Home, the system provides an option to create a new test case and sync with Test Management by Testsigma. This article discusses the two-way sync of AI-generated test cases between both systems.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> - The Test Management by Testsigma integration with Testsigma is enabled.
> - You have AI-generated test cases in Atto’s Home.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.40% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/f9unegwz0yoy?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Create and Sync Test Cases**

1. From the **Dashboard**, go to **Atto’s Home**, and create a session by clicking **Generate with AI**, or open an existing session.

2. Create or expand the generated scenario, and select a test case.

3. In the test case details dialog, go to the **Manual Steps** tab and click **Generate Automated Steps**.

4. Wait until the NLP step generation is complete.

5. After generation completes, the NLP steps appear under the **Automated Steps** tab.

6. Click **Accept**.

7. In the **Select Location** dialog:
   - Select the folder and scenario where you want to add the test case.
   - Click **Confirm**.

8. Click the dropdown arrow next to **Accept**, and select **Accept & Sync with Testsigma TMS**.

9. In the **Sync with Test Management by Testsigma** dialog:
   - Select a **Test Management** project and folder.
   - Click **Continue**.

10. The system creates a new test case in Test Management by Testsigma and links it to the Testsigma test case.

---