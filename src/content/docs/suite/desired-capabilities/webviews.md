---
title: "Configure Android WebViews"
description: "To inspect WebView elements in Testsigma, WebView debugging must be enabled within your application. Learn how to configure Android WebViews."
search_keyword: ""
sidebar:
  order: 16.96
---


---


For inspecting WebView elements in Testsigma, WebView debugging must be enabled within your application. 

This article discusses how to inspect WebView elements in Android.

To enable WebView debugging, call the static method ***setWebContentsDebuggingEnabled(true)*** on the WebView class.
![Enable Debugging](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/DbTrue.png)

:::note[NOTE]
The setting applies to all of the Android WebViews of the app.
:::

---


## **Example React Native generated code**
![React Native Code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/RN.png)

---

## **Example Java Android code**
![Java Code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/java_debug.png)

---

## **Example Kotlin Android code**
![Kotlin Code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/kotlin.png)

:::note[NOTE]
   
  - Android WebView debugging isn't affected by the state of the debuggable flag in the manifest of the app.
  - If you want to enable WebView debugging only when debuggable is true, set the flag as ***WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)***
:::

---