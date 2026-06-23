---
title: 'Overview: Test Capture'
description: 'Test Capture runs alongside manual test execution. This article provides an overview of Test Capture in Test Management by Testsigma.'
sidebar:
  order: 9.1
---

---

Test Capture feature in Test Management by Testsigma that runs alongside manual test execution. It automatically captures screen recordings, video logs, and network logs during testing, removing the need to manually record or attach logs after execution. All captured logs are automatically linked to the original test run, giving developers the visual and diagnostic context needed to investigate and resolve issues. This article provides an overview of Test Capture in Test Management.

---

## **What Test Capture Does**
Test Capture tracks the execution session while a test case is run.
When a log is recorded, it includes both visual output and execution data.

**Log can be captured:**
- **during execution**
- or **after a failure occurs**

No advance setup is required to capture failures.

---

## **Problems Addressed**

Manual test execution often relies on separate tools and manual steps to capture log. This leads to interrupted execution flow, missed failure moments, incomplete recordings, and repeated test execution only to collect proof. log that is captured frequently lacks sufficient execution and technical context for effective defect analysis.

Test Capture addresses these issues by capturing log and execution data as part of the original test run, without requiring advance setup or re-execution.

---

## **Key Capabilities**
- Capture Instant Replay after execution or failure
- Capture screenshots during test execution
- Record the current browser tab during execution
- Automatically collect execution context
- Capture network activity logs

---

## **Captured Log Details**
Each recorded log includes the following information:

### **Visual log**
- Instant Replay or video recording of the execution

### **Execution Metadata**
- Application URL
- Browser name and version
- Operating system
- Screen resolution
- Viewport size
- Timezone
- Timestamp of capture

### **Technical Logs**
- Network requests and responses

All captured data is displayed with the log in the test execution view.

---

## **Where Does this Log Appear?**
- Log is attached to the test case execution within the test run.
- Log appears in the **Activity** section of the test case.
- Test case execution status changes (Passed, Failed, Retest, Blocked) and tester comments are recorded with the log.

---

## **Prerequisite**

The [Test Capture Chrome Extension](https://chromewebstore.google.com/detail/test-capture/okbaemnjkbljcicegpnbcoocfhcmoopn) must be installed and configured in the browser used for test execution.

---