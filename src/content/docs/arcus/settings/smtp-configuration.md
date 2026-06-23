---
title: 'SMTP Configuration in Test Management by Testsigma'
description: 'Configuring SMTP allows your organization to send email notifications from your own authenticated email address | Learn configuring SMTP in Test Management by Testsigma'
sidebar:
  order: 12.7
---

<br>

**Send Testsigma notifications from your trusted email domain by setting up SMTP for improved deliverability & control.**

---

Configuring Simple Mail Transfer Protocol (SMTP) allows your organization to send email notifications from your own authenticated email address instead of Testsigma’s default sender. This ensures improved branding, deliverability, and security for automated notifications. This article discusses configuring SMTP in Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have the following details from your email service provider:
> -    1. SMTP server address
> -    2. Port number
> -    3. Valid username and password
> -    4. Any required additional parameters

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/8jmzlqmmzvbr?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Configure SMTP**

1. From the left navigation bar, go to **Settings > SMTP Configuration**.

2. Turn on the **SMTP Configuration** toggle.

3. Select **@own** to use your own SMTP server, and enter the following details:
   - **Host**
   - **Port**
   - **Username**
   - **Password**

:::note[NOTE]
If you select Testsigma, emails are sent from the default Testsigma email address.
:::

4. Click **Save** to apply your configuration.

5. All email notifications will now be sent from your configured email address.

---