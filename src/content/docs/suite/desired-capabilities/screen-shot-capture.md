---
title: "Enable Capturing Screenshots (Android & iOS)"
description: "While testing application in Testsigma, it is important to enable capturing screenshots. Learn how to enable capturing screenshots for Android and iOS"
search_keyword: ""
sidebar:
  order: 16.95
---

---

In some applications, we can not take a screenshot as the developer will secure the screen. While testing your application in Testsigma, it is important to enable capturing screenshots.

This article discusses how to enable capturing screenshots for Android and iOS. 

:::note[NOTE]
By default, screenshots will be allowed in both Android and iOS. If for some reason the developer has disabled it in **MainActivity** or any other **Activity** you want to inspect inside the app then you have to enable it by removing the code which adds the restriction.
:::

---

## **For Android Applications**
You can enable capturing screenshots by simply removing the code below in the MainActivity.java or any other Activity you want to inspect.<br>

***getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,***<br>
                ***WindowManager.LayoutParams.FLAG_SECURE);***
<br>


---

## **For iOS Applications**

In iOS applications, if you’re using third party tools to disable screenshot, you need to remove that restriction to allow inspection in Testsigma.

---