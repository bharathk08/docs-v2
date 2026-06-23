---
title: 'Capture Logs Using Test Capture'
description: 'Test Capture lets you record execution logs during manual testing. Tshis article discusses capturing and reviewing execution evidence using Test Capture during manual test runs.'
sidebar:
  order: 9.3
---

---

Test Capture lets you record execution logs during manual testing. You can update the execution status and add comments directly from the companion panel. It also captures video, console, and network logs for each test case. All logs are automatically linked to the test run and are available for review. This article discusses capturing and reviewing execution evidence using Test Capture during manual test runs.

---

## **Capture Logs During Test Execution**

1. From the left navigation bar, go to **Test Runs**.
   ![Test Runs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Runs_for_Capture.png)

2. Open a test run.

3. On the **Test Run details** page, click **Execute & Capture**.
   ![Execute & Capture](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Execute_And_Capture_on_Test_Runs.png)

:::note[NOTE]
You can also select multiple test cases and click **Execute & Capture**.

![Bulk Select](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Bulk_Select_for_Execute_and_Capture.png)
:::

4. The **Test Capture** panel opens with the test run details along with test cases.
   ![Test Capture Panel](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Capture_Panel.png)

5. Open a test case and start manual execution.
   ![Open a test inside panel](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Open_Test_Case_in_Capture.png)

6. When you see a bug or error:
   ![Capture Logs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Capturing_Logs_from_Test_Capture.png)
   - Update the test execution status (**Passed**, **In-Progress**, **Failed**, **Retest**, **Skipped** or **Blocked**).
   - Add a comment describing the observation.
   - Select **Attach Instant Replay** to automatically attach video capture and technical logs from the last 2 minutes.
   - Click **Save Logs**.

   The log is captured and attached to the current test execution.

---

## **View Captured Logs in Test Runs**

1. From the left navigation bar, go to **Test Runs**.

2. Open the test run executed using **Test Capture**.

3. Open the test case.
   ![Open Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Open_Test_Case_from_Runs_for_Logs.png)

4. Scroll to the **Activity** section.

   The **Activity** section displays for logs:
   ![Activity of logs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Activity_Section_of_Test_Cases.png)
   - **Execution timestamps**
   - **Status changes**
   - **Tester comments**
   - **Attached log**

5. Click **Instant Replay**. 
   ![Instant Reply](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Instant_Reply.png)

6. This will open a new displaying the detailed evidence, including:
   ![Detailed Evidence](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Detailed_Evidence_of_Log.png)
   - **Visual replay of the execution**
   - **Execution information**
   - **Console logs**
   - **Network logs**
   - **AI Summary**

---

## **Capture Logs from a Directly Website**

1. Open the website you want to test.

2. Perform testing actions on the website.

3. When you see an issue/bug, click **Extensions** and select **Test Capture**.

4. Select **Instant Reply**. This will open a new tab. 
   ![Instant Reply](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Instant_Reply_to_Capture_Log_Directly.png)

5. Click **Select Test Case**.
   ![Select Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Test_Case_for_Instant_Reply.png)
   
6. In the **Link to Test Management System** dialog:
   ![Info in Link to TMS](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_TMS_Test_Case_to_Instant_Reply.png)
   - Select a **project**, **test run**, and **test case**.
   - Click **Link**.

7. Update the execution status (**Passed**, **In Progress**, **Failed**, **Retest**, **Skipped**, **Blocked**).
   ![Add Status](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Status_To_Capture_Log.png)

8. Add a **Comment** describing the observation.
   ![Comment](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Comment_to_Attach_log.png)

9. Click **Save Log**.
   ![Save Log](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Save_Log_Directly_from_Web_for_Instant_Reply.png)

---