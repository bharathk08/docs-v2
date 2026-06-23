---
title: 'Import Test Data from Testrail'
description: 'Test Management by Testsigma allows you to quickly import test cases from Testrail into an existing project. This feature streamlines test case migration and bulk additions'
sidebar:
  order: 5.3
---

<br>

**Learn how to export test cases from Testrail and import them into Test Management by Testsigma.**

---

You can export test cases from Testrail and import them into Test Management by Testsigma. This article discusses the steps to export test cases from Testrail and import them into Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that you have a .csv file containing the exported test cases from Testrail.

---

## **Export Test Cases from Testrail**

1. On the **Testrail** dashboard, go to **Projects > Test Cases**.

2. Select the test cases, click **Export** icon and select **Export to CSV**.

3. In the **Export to CSV** dialog, select the **Sections** (folders) and **Columns** (properties and values) you want to export.

4. The file will be downloaded in **.csv** format.

:::note[NOTE]
Testsigma supports test case import in .csv format. If your test cases are in other formats like .xlsx, convert the file to .csv before proceeding.
:::

---

## **Import Test Cases**

1. On the **Dashboard**, click **Import Test Cases**. This will open the **Import** section on **Project Settings**.

   Alternatively, navigate to **Test Cases** and click **Import** on the top right corner.

2. Click **Import via CSV**.

3. Click **Upload File** and select file to import.

:::note[NOTE]
Follow the steps in the [Import Test Cases](https://testsigma.com/docs/test-management/imports-and-exports/csv-file/) document to prepare the file and map values or properties to align with the test case structure in Test Management by Testsigma.
:::

---
