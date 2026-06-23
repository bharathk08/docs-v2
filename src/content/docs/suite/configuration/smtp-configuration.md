---
title: "SMTP Configuration in Testsigma"
description: "This article discusses a step-by-step guide to setup Simple Mail Transfer Protocol (SMTP) to trigger emails from a configured email address."
search_keyword: ""
sidebar:
  order: 20.7
---

---

Simple Mail Transfer Protocol (SMTP) is a standard protocol for sending mail from a configured email address. This article discusses how to configure SMTP in Testsigma Application. 

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have: 
> - SMTP Server Address
> - Port Number
> - Valid Credentials
> - Additional Parameters

---

## **Steps to Configure SMTP in Testsigma**

1. Navigate to **Settings > SMTP Configuration**.

2. Turn on the **SMTP Configuration** toggle.

:::note[NOTE]
You will stop getting emails if you turn off the SMTP Configuration toggle. 
:::

3. Select **@own**, and enter all the details.

4. Click on **Save**.

:::note[NOTE]
If you select Testsigma, the mails will go with default email. For **@own** configuration, you need to enter the following details:<br>
<br>
**host:** smtp.gmail.com<br>
**port:** 587<br>
**username:** &lt;email&gt; <br>
**password:** &lt;Generated from your email client&gt; <br>
**keys:** <br>
{<br>
   mail.smtp.auth: true,<br>
   mail.smtp.starttls.enable: true<br>
}<br>
:::


--- 


## **Steps to generate Password from email**


1. Navigate to **Manage Accounts > Security > App passwords**.
![Navigate to Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/appasswords.png)


2. Select **app**, **device**, and click on **Generate**.
![Generate Password](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Generate.png)


3. The password will be generated and displayed as below:
![Passwor](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/password.png)

:::note[NOTE]
These steps are specific for generating an app password in a Google account. The process may be different for other email clients/services.
:::

---