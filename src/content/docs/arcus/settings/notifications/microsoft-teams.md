---
title: 'Set Up MS Teams Notifications'
description: 'Set up tailored MS Teams notifications so your team never misses key updates on assignments, status changes, or reviews | Learn how to setup MS Teams notifications'
sidebar:
  order: 12.84
---

<br>

**Configure custom MS Teams notifications to keep your team updated on important changes across your test assets.**

---


Test Management by Testsigma allows you to configure Microsoft Teams notifications for various test entities. These notifications help teams stay aligned with testing activities by delivering real-time updates within Teams channels. This article discusses setting up and customizing Microsoft Teams notifications in Test Management by Testsigma.

:::note[NOTE]
Authorize the integration using a separate Microsoft account designated only for setup. The account used for authorization will not receive notifications due to a limitation in Microsoft Teams.
:::

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that you have access to a MS Teams workspace.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/l1ldfykytwwb?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Entities Available for MS Teams Notifications**

**1. Test Run Assigned** <br>
Send notification when a test run is assigned to a user

**2. Test Case Waiting on Review** <br>
Send notification when a test case is submitted for review

**3. Test Case Approved** <br>
Send notification when a test case is approved

**4. Comments Mentioned** <br>
Send notification when a user is mentioned in a comment

**5. Test Run Completed** <br>
Send notification when a test run status changes or is completed

**6. Test Case Assigned** <br>
Send notification when a test case is assigned to a user

**7. Test Case Rework Requested** <br>
Send notification when a test case requires rework

**8. Test Run Added to Test Plan** <br>
Send notification when a test run is added to a test plan

**9. Test Plan Completed** <br>
Send notification when a test plan is completed

**10. Test Plan Daily Summary** <br>
Send daily summary notification for active test plans

:::note[NOTE]
You can enable or disable notifications for each test entity. Toggle notifications on for events you want to receive and off for those you do not need.
:::

---

## **Customize MS Teams Notifications**

1. From the left navigation bar, go to **Settings > Notifications**.

2. Expand **Notifications**, and click **MS Teams**. This will open the **Customise MS Teams Notifications** section. 

3. In the **Customise MS Teams Notifications** section, hover over the entity you want to edit and click the **Edit icon**.

4. Update the **Notification Template** as needed.

:::note[NOTE]
Click **Send Test Notification** to send a test notification.
:::

5. Click **Save** to apply the changes.


---

## **Add MS Teams Notifications in a Test Plan**

1. From the left navigation bar, go to **Test Plans**.

2. Create a new test plan or open an existing one.

3. In the **Notifications** section, select the **MS Teams** channel from the dropdown menu.
   ![MS Teams Notifications Setup](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/MS_Teams_Notifications.png)

4. Notifications will be sent when the test plan is created or updated.

---