---
title: "Test Data Type: Data Generator"
description: "Discover how you can enable dynamic test data creation with Testsigma's Data Generators to optimise your test scenarios for enhanced efficiency and coverage."
sidebar:
  label: "Data Generator"
  order: 5.117
---

---

Testsigma allows you to automatically generate test data during test execution through its Data Generators. Data Generators eliminate the need for manual data input and help you create dynamic and robust tests. They can generate various data types such as names, emails, dates, numbers, etc.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> - [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).
> - [Documentation on creating projects](https://testsigma.com/docs/projects/overview/). 
> - [Documentation on creating test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/).
> - [Documentation on creating test data types](https://testsigma.com/docs/test-data/types/overview/). 
> - [Documentation on managing default test data generators](https://testsigma.com/docs/test-data/data-generators/default-list/). 
> - [Documentation on creating custom test data generators](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/) using Java.

---

## **Add Data Generators in Test Steps**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
   ![Test Data](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.1.png)
2. Click the **test data** placeholder to replace it, and then select the **! Data Generator** from the **Test Data Types** dropdown menu.
   ![Data Generator](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.2.png)
3. Select **Type** as **Default** in the **Data Generators** overlay screen to use a collection of built-in test data generators.
   ![Type](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.3.png)
:::note[NOTE]
You can create a **data generator add-on** and select the **Type** to use your **custom** data generator.   
:::
4. Select **Function Type** from the dropdown list.
   ![Function Type](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.4.png)
5. Select **Function** from the dropdown list, and the system will display a built-in function list corresponding to the selected **function type**.
   ![Function](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.5.png)
6. Click the right arrow before **Show Examples**. Each function has examples; you can find **descriptions** of the **functions** and **examples** of **inputs** and **outputs**.
   ![Example](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.6.png)
7. Use the example as a reference, enter **inputs** in the function fields and click **Save** to add a data generator in the test step.
   ![Inputs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_generator_1.7.png)

---