---
title: 'Manage Custom Fields'
description: 'Create and manage custom fields in Test Management by Testsigma to add specific details/additional details and filter tests efficiently in your test management workflow'
sidebar:
  order: 12.2
---

<br>

**Custom fields add specific information in your test cases & help filter test cases.**

---

In Test Management by Testsigma, you can create custom fields to add additional, project-specific information to your test cases. These fields help you track attributes beyond the default properties. After creating a custom field, you can add it to test cases and use it to filter and locate specific test cases efficiently. This article discusses how to create a custom field, add it to test cases, and filter test cases using custom field values.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure you have a project created in Test Management by Testsigma. For more information, see [Projects](https://testsigma.com/docs/test-management/projects/manage-projects/).

---

## **Create a Custom Field**

1. From the left navigation bar, go to **Settings > Custom Fields**.

2. In the **Custom Fields** section, click **+ Add New**.

3. In the **Add New Field** overlay:

   - Enter the **Field Name** and an optional **Description**.
   - Select the **Field Type** from the dropdown.
   - Enter the values for the selected **Field Type**, then click **Add**.

4. The custom field will appear in the **Custom Fields** section.

---

## **Add Custom Fields to a Test Case**

1. From the left navigation bar, go to **Test Cases** and select an existing test case or create a new one.

2. In the **Test Properties** section, select the custom field values you want to add.

3. The test case will now include the selected custom fields.

---

## **Bulk Edit Custom Fields in Test Cases**

1. From the left navigation bar, go to **Test Cases** and select the test cases you want to update.

2. Press **Command+K**, and choose the **Custom Field** you want to edit from the available options.

3. In the **<Custom\_Field\_Name>** dialog:
   - Select/enter the value you want to apply.
   - Click **Update &lt;number&gt; Test Cases**.

4. The selected Custom Field is updated for all selected test cases.

---

## **Filtering Test Cases Using Custom Fields**

1. From the left navigation bar, go to **Test Cases**.

2. Press **Command + Shift + F** or click **Filter by**.

3. In the **Filter by** dialog, select the **Custom Field** you want to filter test cases by.

4. The Test Cases page displays test cases based on the selected custom field.

---
