---
title: "Set Google Play Store Credentials"
description: "This article discusses the capability you need to set to access Google Play Store services & test services like in-app purchase flows, verify payments, and production version"
search_keyword: ""
sidebar:
  order: 16.98
---

---

With Testsigma, you can test Google Playstore in-app purchase flows, verify payment acceptance using Google Pay, or test the production version of your app downloaded from the Google Play Store. This article discusses the desired capability you need to set to access Google Play Store services. 

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> - [Documentation on creating Ad-Hoc runs](https://testsigma.com/docs/runs/adhoc-runs/).

---

## **Desired Capability to Access Google Play Store**

In order to access Google Play Store, you can use the following desired capability to pass your own credentials for Google Play Store login:

**browserstack.appStoreConfiguration**

|**Name**|**Data Type**|**Value**|
|---|---|---|
|browserstack.appStoreConfiguration|String|{“username” : “play-store-email”,<br> “password” : “play-store-password”}|


---

## **Using Google Play Store Credentials Capability**

1. Click on **Run** from the **Test Case Details** page.
![Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_descap_1.png)

2. On the **Ad-Hoc Run** overlay, click on **Desired Capabilities**.
![Ad-Hoc Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_descap_2.png)

3. Enter **browserstack.appStoreConfiguration** in the **Key** field, select **String** as the **Data type**, and set the **Value** with **Username & Password**.
![Key](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_geodescap_1.png)

4. Click on **Run Now** to execute the test case.
![Run Now](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_geodescap_2.png)

---