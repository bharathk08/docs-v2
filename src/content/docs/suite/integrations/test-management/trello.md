---
title: "Trello Bug Reporting Integration"
description: "How to integrate Testsigma with Trello for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Trello project"
sidebar:
  label: "Trello"
  order: 17.53
---

---


With Testsigma and Trello integration, you can push bugs directly from Testsigma to your Trello project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.

This document discusses establishing Integration with Trello from your Testsigma account and creating the first bug from Testsigma, which can flow into Trello.


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> - You have the **API Key** and **User Token** from your Trello account.
> - You have referred to the [documentation on executing test plan runs](https://testsigma.com/docs/runs/test-plan-executions/).

---


## **Integrate Trello with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/mstinav.png)


2. Enable toggle on **Trello** widget.
![MS Teams Toggle](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tiwts.png)


3. On the **Trello details** prompt, enter **API Key**, **Token** and click on **Save & Enable**.
![Save and Enable](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tiwtssae.png)

---

## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/tcresultyt.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/reportbugyt.png)

3. Choose **Trello** and enter the detailed information of your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/plugins-create-trello-bug-form-filled.png)

:::note[NOTE]
Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.
:::

If you want to link to an existing issue on Trello, click on the **Link to Issue** button, search for an existing issue in the search field, and click on Link Issue to add a link to an existing Issue on Trello. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.

When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Trello by Testsigma. This helps the developer who checks the issue in Trello better understand the issue/bug with more context.

---