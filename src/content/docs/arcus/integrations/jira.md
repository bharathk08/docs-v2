---
title: 'Jira Integration with Test Management by Testsigma'
description: 'Integrate Test Management by Testsigma with Jira to link defects to issues, enhance traceability, streamline defect management, and boost team collaboration'
sidebar:
  order: 10.3
---

<br>

**Integrate Jira with Test Management by Testsigma to seamlessly link defects to Jira issues.**

---

Test Management by Testsigma allows seamless integration with Jira, which enables you to link test defects directly to Jira issues. This integration enhances traceability, streamlines defect management, and improves collaboration between QA and development teams.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure that you have an active Jira account with the necessary permissions.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/52pdruqngdxp?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Integrate Jira**

1. From the **Dashboard**, go to **Settings > Integrations**.

2. Click **Setup Integration** next to the Jira icon. This opens a new tab with the **Atlassian Login** page.

3. Log in using valid credentials.

4. On the **Requesting Access** page, select the app from the **Use app on** dropdown.

5. Click **Accept** to complete the integration.

---

## **Link Defects to Jira**

1. From the **Dashboard**, go to **Test Runs**.

2. Open a test run from the list.

3. Click the test case to log a defect. This opens the **Quick View** overlay.

4. The Atto AI agent automatically fills in the **Project**, **Issue Type**, **Status**, and **Description**. If needed, edit the required fields and click **Add**.

5. You can either link to an existing Jira issue or create a new Jira issue.

---

## **Link Defects to an Existing Issue**

1. Open a test case from the test run. This opens the **Quick View** overlay.

2. Click **Add a Defect**.

3. On the **Add a Defect** overlay, select the **Link to Existing Issue** tab.

4. Choose the Jira issues you want to link with the defect.

5. Click **+ Add Defect** to complete the linking.

:::note[NOTE]
You can link a defect to multiple existing issues.
:::

---

## **Link Defects to a New Issue**

1. Open the test case from the test run. This opens the **Quick View** overlay.

2. Click **Add a Defect**.

3. On the **Add a Defect** overlay, select the **Create a New Issue** tab.

4. Select the **Project**, **Issue Type**, **Status**, **Assignee**, and **Reporter** from the respective dropdowns.

5. Enter a **Summary** and an optional Description.

6. Click **+ Add Defect**. The new issue will be created in Jira and the defect will be linked to it.

---
