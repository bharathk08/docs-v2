---
title: 'Creating Test Runs'
description: 'Create test runs in Test Management by Testsigma by manually adding test cases, applying filters, or selecting all and ensure thorough testing of your applications'
sidebar:
  order: 7.1
---

<br>

**Learn how to create, organize & add status to the test runs in Test Management by Testsigma.**

---

Test runs ensure thorough testing of your applications. You can create test runs by adding test cases manually, using filters to dynamically include relevant test cases, or selecting all available test cases. Additionally, you can schedule, organize, and add status to the test runs. Effective test run management provides insights, drives continuous improvement, and enhances testing efficiency. This article discusses creating test runs in Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that a project is created and test cases are available for adding to Test Runs. For more information, see [Projects](https://testsigma.com/docs/test-management/projects/manage-projects/) and [Test Cases](https://testsigma.com/docs/test-management/test-cases/manage-test-cases/).

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(55.44% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/c06lu6f5vjoz?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Create a Test Run**

1. From the **Dashboard**, go to **Test Runs** and click **Create Test Run**.

2. On the **Test Run Details** page, enter a **Title** and an optional **Description**.

3. Click **Add Test Cases**.

4. In the **Attach Test Cases** dialog, choose one of the following options:

   - **Select Test Cases Individually**: Manually select specific test cases without automatic additions.
   - **Adding Cases Using Filters**: Automatically add test cases that match defined filter criteria based on test case properties.
   - **Add All Test Cases**: Include all available test cases without manual selection.

5. On the **Add Test Cases to Test Run** page, validate the selected test cases and click **Attach Test Cases**.

6. Click **Create Test Run**.

---

## **Select Individual Test Cases for a Test Run**

1. On the **Attach Test Cases** dialog, select **Select Test Cases Individually** and click **Select Test Cases**.

2. On the **Add Test Cases to Test Run** page, bulk select the test cases.

3. Click **Attach Test Cases**. This redirects to the **Test Run Details** page.

4. Click **Create Test Run**.

5. The test run is created with the selected test cases.

---

## **Select Test Cases Using Filters for a Test Run**

1. On the **Attach Test Cases** dialog, select **Adding Cases Using Filters** and click **Select Test Cases**.

2. On the **Add Test Cases to Test Run** page, select the filters for test case selection.

3. Choose the options for the corresponding filters and click **Apply Filters** to auto-select test cases.

4. Click **Create Test Run**.

5. The test run is created with the selected test cases.

:::note[NOTE]
To modify filters after creation, click **Update Filters** on the **Test Run Details** page. This dynamically selects test cases based on the updated filters.
:::

---

## **Select All Test Cases for a Test Run**

1. On the **Attach Test Cases** dialog, select **Add All Test Cases** and click **Select Test Cases**.

2. All available test cases will be added to the test run.

3. Click **Create Test Run** to finalize the test run with the selected test cases.

---
