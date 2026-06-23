---
title: "Integrate Testsigma with Gearset (Salesforce)"
description: "Integrate Testsigma with Gearset for effortless Salesforce test automation | Improve your testing efficiency accelerate Salesforce automation by integrating Testsigma with Gearset"
sidebar:
  order: 13.25
---

---

Testsigma Gearset integration allows you to trigger test plan execution every time a Gearset deployment is triggered. This article discusses how to integrate Testsigma with Gearset in Salesforce deployments.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> - [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> - [Documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).
> - [Documentation on creating generating API keys](https://testsigma.com/docs/configuration/api-keys/#steps-to-generate-api-key). 

---

## **Test Plan Execution Setup in Gearset CI Job**

1. On **Outgoing webhooks** section, 

   ![Details in Webhook](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Config_in_Gearset.png)

   - Enter the **API Endpoint** from **cURL** in the **Outgoing webhook url** field. 
    [[info | **NOTE**:]]
    | You can find this under **Test Plans > CI/CD Integrations > REST API call to start Test Plan**

   - In the **Payload** field, select **Custom**.

   - In the **Authentication** field, select **Authorization**.

   - In the **Credentials** field, add the **API key** in the following format 
  
       > `Bearer <API-KEY>`

   - Add the following **Header** details:
  
       > **Header key:** Accept <br>
       > **Header value:** application/json

   - In the **Content-Type** field, select **application/json**.

   - In the **Payload** field, enter the test plan execution ID in the following format:
     
        ```
        {
        “executionId”:”<id>”
        }
        ```

    [[info | **NOTE**:]]
    | You can find the **Execution ID** under **Test Plans > CI/CD Integrations > REST API call to start Test Plan**
    | ![Env ID](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Gearset_Exe_ID.png)


2. Go to **Notifications**, click **Save CI Job**. 


3. Once the metadata is downloaded, verify that the test plan is triggered from Gearset. 

---