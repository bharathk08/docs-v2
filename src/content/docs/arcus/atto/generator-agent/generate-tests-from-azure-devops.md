---
title: 'Generate Test Cases from Azure DevOps'
description: 'Generate multiple AI-powered test cases in Testsigma directly from Azure DevOps user stories for faster, smarter test creation.'
sidebar:
  order: 14.29
---

<br>

**Generate detailed test cases quickly using Azure DevOps work items in Test Management by Testsigma.**

---

You can generate multiple test cases in Testsigma directly from your Azure DevOps user stories using AI. Simply select the Azure DevOps organization, project, work item type, and story. The AI uses the information in Azure DevOps to create complete test cases.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> - You have a project in Test Management by Testsigma.
> - Your Azure DevOps project contains active user stories or work items.
> - Azure DevOps is integrated with Test Management by Testsigma.

---

## **Generate Test Cases**

1. On the **Dashboard**, click **AI Powered Test Case Generation** under **Quick Actions**.

 
   Alternatively, go to **Test Cases** and click **Create with AI** in the top-right corner.


2. On the **Ask AI – To Generate Multiple Test Cases** page, select **Azure DevOps Work Items** from the available options.

3. In the **Add Azure DevOps Work Items** dialog:
   - Select the **Azure DevOps Organization**.
   - Select the **Project**.
   - Select the **Work Item Type** (for example, User Story or Bug).
   - Select the required **Work Item**.
   - Click **Add**.

4. Click the folder icon, and choose the folder where you want to add the test cases.

5. Select the test case type: **Documentation** or **Test Step** template.

6. Enter the prompt, and click **Generate**.

7. Wait for Testsigma to generate scenarios and the corresponding test cases.

8. Expand each scenario to view the associated test cases.

9. Select the test cases you want to include under each scenario, and click **Accept**.

10. The selected test cases will be added to the specified folder

---