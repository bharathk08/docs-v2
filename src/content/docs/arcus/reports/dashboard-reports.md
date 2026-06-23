---
title: 'Reports in Dashboard View'
description: 'The Dashboard view in Test Management by Testsigma gives real-time test metrics. Learn how to track progress, monitor test health, & identify defects from Dashboard'
sidebar:
  order: 15.3
---

<br>

**Get a complete view of your test status, defects, and coverage in one place.**

---

The Dashboard provides a real-time view of your test management activities. It displays key metrics such as test case counts, execution status, automation coverage, test run trends, defects, and review status all from a single screen, without navigating to detailed reports.

These charts dynamically update based on selected filters, such as date range and assignee. This enables you to view data filtered by specific date ranges and individual users.  This article discusses the reports section in the Dashboard. 

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.52% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/nbn5jx71xyly?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Filters**

### **Date Range**

The charts in the Dashboard displays data from a defined date range. Select a range from the From dropdown to view data for a specific period which is as follows:
- Last 1 day
- Last 7 days
- Last 1 month
- Last 3 months
- Last 6 months
- Last 1 year
- All time

### **Assigned To** 

Use the Assigned To filter to view data for a specific assignee.

You can use this filter to:
- Track user-specific test activities
- Review workload distribution
- Compare execution metrics by user

:::note[NOTE]
Combine filters to narrow down the data and gain more targeted insights. For example, **Last 1 month + a specific assignee**.
:::

---

## **Summary Metrics**

The **Dashboard Header** displays the following metrics:

- **Automation Coverage**: Percentage of automated test cases.
- **Automated Test Cases**: Number of automated test cases.
- **Manual Test Cases**: Number of manual test cases.
- **Total Test Cases**: Total number of test cases.

These values help you understand the overall test case distribution in the project.

---

## **Active Runs**

This section displays a **Donut Chart** showing the status of all active test runs within the selected date range.
- Passed
- Failed
- Blocked
- In Progress
- Retest
- Skipped
- Untested

Use this chart to assess the current state of test execution.

:::note[NOTE]
Click **View Active Runs** to see the full list of active runs.
:::

---

## **Closed Test Runs**

This section displays a **Line Chart** showing the number of closed test runs over time. 

Each point on the chart represents the count of runs closed on that date.

Use this chart to understand test cycle completion patterns.

:::note[NOTE]
Click **View Closed Runs** to see all closed test runs.
:::

---

## **Results from Closed Test Runs**

This section displays a **Horizontal Stacked Bar Chart** summarizing the test case results from closed runs.

Each bar is grouped by status:
- Passed
- Failed
- Blocked
- Skipped
- Retest
- In Progress

Use this chart to evaluate the outcome and quality of recently completed test runs.

---

## **Types of Test Cases**

This section displays a **Donut Chart** showing the distribution of test cases by category.

Categories include:
- Functional
- Integration
- Non-Functional
- Unit Test
- User Experience

The chart also displays the total number of test cases.

:::note[NOTE]
Click **View Test Cases** to open the **Test Case List** page.
:::

---

## **Defects Logged**

This section displays a **Bar Chart** showing the number of defects logged during the selected time period.

Use this chart to review defect trends and identify periods of high defect activity.

---

## **Test Case Review Status**

This section has two tables.

### **Awaiting My Review**

Shows the test cases assigned to you for review.

Columns include:
- **Test Case Name**
- **Assignee**
- **Submitted Time**

Use this table to identify pending review tasks.

### **Submitted for Review**

Shows the test cases you have submitted for review.

Columns include:
- **Test Case Name**
- **Reviewer**
- **Submitted Time**

Use this table to track review progress for your submissions.

---

## **Export Reports**

1. On the **Dashboard**, apply the necessary filters, and click **Export**.

2. In the **Export Report as PDF** dialog, enter a name, and click **Download PDF**.

3. The system downloads the report as a PDF file.

---