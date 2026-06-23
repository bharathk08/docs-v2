---
title: "Using Testsigma Tunnel"
description: "Learn how to use Testsigma Tunnel for Test Automation and Live Testing of REST APIs. This article discusses configuring desired capabilities & API Settings."
sidebar:
  order: 34.8
---

---

You can use Testsigma Tunnel for Test Automation by configuring the desired capabilities and for Live Testing of REST APIs by configuring the Advanced API Settings. This article discusses using Testsigma Tunnel for both Test Automation and Live Testing of REST APIs.


---

## **For Test Automation:**

1. In the test case details page, click **Run** on the top right corner. 

2. In the **Ad-Hoc Run** overlay, select **Test Lab**, **Test Machine**, and click **Desired Capabilities**.

3. Enter the following:
   
   |**Key**|**Data Type**|**Value**|
   |---|---|---|
   |**testsigmaLab.tunnelName**|String|&lt;tunnel_Name&gt;|

---

## **For Live Testing REST API:**

1. Open the **REST API** Step.

2. Go to **Settings**.

3. Enter the **Testsigma Tunnel Name** in the **Tunnel Name** field.

   ![Using Tunnel in API](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Testsigma_Tunnel_API.png)


:::note[NOTE]
If the REST API test is saved with the tunnel name, it will be used for automation unless overridden by the **testsigmaLab.tunnelName** capability in the run form.
:::


---