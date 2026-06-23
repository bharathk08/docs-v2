---
title: 'Import Test Data from Zephyr'
description: 'Test Management by Testsigma allows you to quickly import test cases Zephyr into an existing project. This feature streamlines test case migration and bulk additions'
sidebar:
  order: 5.2
---

<br>

**Learn how to export test cases from Zephyr and import them into Test Management by Testsigma.**

---

You can export test cases from Zephyr and import them into Test Management by Testsigma. This article discusses the steps to export test cases from Zephyr and import them into Test Management by Testsigma.

:::note[NOTE]
Currently, only test cases created using the Plain Text template can be imported into Test Management by Testsigma.
:::

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that you have a .csv file containing the exported test cases from Zephyr. If your test cases are in .xlsx format, convert the file to .csv before proceeding.

---

## **Export Test Cases from Zephyr**

1. On the **Jira** dashboard, go to **Projects**, and then click the **Zephyr** tab.

2. Select the folder that contains the test cases you want to export.

3. Select the test cases, click **More**, and select **Export to Excel**.

4. The file will be downloaded in **.xlsx** format.

:::note[NOTE]
Testsigma supports test case import in .csv format. Convert the .xlsx file to .csv before proceeding.
:::

---

## **Import Test Cases**

1. On the **Dashboard**, click **Import Cases**. This will open the **Import** section on Project Settings.

   Alternatively, navigate to Test Cases and click Import on the top right corner.

2. Click **Import via CSV**.

3. Click **Upload File** and select file to import.

:::note[NOTE]
Follow the steps in the [Import Test Cases](https://testsigma.com/docs/test-management/imports-and-exports/csv-file/) document to prepare the file and map values or properties to align with the test case structure in Test Management by Testsigma.
:::

---
