---
title: 'Figma Integration with Test Management by Testsigma'
description: 'Generate test cases directly from Figma designs in Testsigma | Ensure design-to-test alignment and accelerate test creation by converting UI elements into test steps'
sidebar:
  order: 10.4
---

<br>

**Integrate Figma with Test Management by Testsigma to generate test cases from your designs.**

---

Testsigma lets you generate test cases directly from your Figma designs. This helps ensure design-to-test alignment and accelerates test case creation by converting UI elements into actionable test steps.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Before you begin, ensure you have a project created in Test Management by Testsigma and have integrated your Figma account.

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(55.44% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/xygzz9kvaxat?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Prerequisite Details for Figma Integration**

### **Getting Team ID in Figma**

1. Open **Figma** application in a web browser.

2. In the left navigation bar, select the team from the dropdown menu.

3. In the address bar, locate the URL in the following format:

   > <a href="https://www.figma.com/files/team/{TEAM_ID}/your-team-name" rel="nofollow">https://www.figma.com/files/team/{TEAM_ID}/your-team-name</a>
   >
   >
   > The **{TEAM_ID}** in the URL is your Figma Team ID.

:::note[NOTE]
If you don’t have access to the team page, contact your Admin to get the **Team ID**.
:::

### **Generating a Personal Access Token in Figma**

1. Open **Figma** in a web browser.

2. In the top-right corner, click your profile icon, and then select **Settings**.

3. Navigate to **Security > Personal access tokens** section.

4. Click **Generate new token**.

5. In the **Generate new token** dialog, enter a **Token name**.

6. From the **Expiration** dropdown, select an expiration period

7. Click **Generate token**.

8. Click **Copy** this token to copy the key.

:::note[NOTE]
Store the token securely. You won’t be able to view it again.
:::

---

## **Integrate Figma**

1. On the **Dashboard**, click **Integrations**. This opens the **Integrations** section under **Settings**.

2. Click **Setup Integration** next to the **Figma** icon.

3. On the **Integrate Figma** prompt,

   - Enter the **Team ID** and **API Key**.

   - Click **Connect** to complete the integration.

---
