---
title: "Integrate Testsigma with BrowserStack"
description: "BrowserStack integration lets you execute your Testsigma tests on BrowserStack. Learn how to integrate the BrowserStack Cloud Test Execution Platform with Testsigma"
sidebar:
  order: 17.42
---

---

<a href="https://www.browserstack.com/automate?utm_source=testsigma&utm_medium=partnered" rel="nofollow">BrowserStack Integration</a> with Testsigma lets you run your Testsigma tests on BrowserStack. If your organization has an existing account with BrowserStack, you can author tests for Web, Mobile Web, and Mobile applications on Testsigma, and then run those tests on BrowserStack’s cloud devices.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> - You have the **username** and **API Key** from your BrowserStack account dashboard (available under **Account Settings > Automate**).
> - You have referred to the [documentation on supported test lab types](https://testsigma.com/docs/test-plans/supported-test-lab-types/).

---

## **Integrating with BrowserStack**

Once the username and API key is obtained, navigate to the **Integrations** page through **Dashboard > Settings > Integrations**. 

1. Enable the toggle next to **BrowserStack**. 
2. in the **BrowserStack details** dialog, enter the username and API Key obtained from **BrowserStack** here.
3. After entering the details, click on the **Save & Enable** button to add the integration.

---

## **Using BrowserStack for Test Runs**

Once the account details are added to the **Integrations** page, select **BrowserStack** as the **Test Lab** type instead of Testsigma Lab while creating an Ad-hoc run or Test Plan Run.

![Select BrowserStack as the Test lab Type for Test Plan Run or Ad-hoc Run GIF](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_browserstack_1.png)


---