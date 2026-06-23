---
title: "Testing API Responses with Custom Values"
description: "Learn how to send custom values and experiment with the different types of test data | Testsigma allows you give inputs while testing an API responses in Testsigma"
search_keyword: ""
sidebar:
  order: 4.793
---

---

The goal of sending custom values while creating API steps is to ensure that all input sources are accurately parsed while testing API responses as you send the request. This allows you to experiment with the data and make necessary changes while designing API tests. 

With Testsigma, you can choose default and custom values for various variables such as parameters, runtime, environment, random data generators, phone numbers, and mailboxes and verify responses. This article discusses providing custom test data inputs while creating API steps.


---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> - [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).
> - [Documentation on adding Rest API to the test steps](https://testsigma.com/docs/test-cases/step-types/rest-api/#add-restful-api-in-test-steps).

---

## **Steps to Send Custom Variables in API Steps**

1. From the left-side navbar, select **Create Tests > Test Cases** and then create a test case. 
   ![Create test case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_1.png)

2. On the **Test Case Details** page, click the option next to the test step and select **Rest API**.
   ![Rest API](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_2.png)

3. Click on the test step to open the **Rest API** window.

4. Enter the **Title**, choose the **Method**, and enter the **Endpoint**.
   ![Title](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_3.png)

5. Select the data you want to parametrize and click **Insert Test Data**.
   ![Insert Test Data](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_4.png)

6. Choose the test data type you want to add (e.g., **@Parameter**).
   ![Parameter](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_5.png)

7. In the **@Parameter** overlay, select the required parameter name. 
   ![parameter name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_6.png)

8. Click **Add Request Values**. The **Request values** overlay will open. 
   ![Add Request Value](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_7.png)

9. In the **Request Values** overlay, click **URL**, add the value to the parameter in the **URL**, and click **Apply**.
   ![Request Values](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_8.png)

10. Click **Send** and verify the response received from the API.
   ![Send](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_custom_values_9.png)



---