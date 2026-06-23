---
title: 'Writing Best Prompts that Generate the Best Test Cases'
description: 'Learn how to write clear prompts that guide Atto to generate accurate, relevant test cases. No rework, just the ones you need with right prompts.'
sidebar:
  order: 14.52
---

<br>

**You don’t need more test cases. You need the right ones. This guide shows you how.**

---

Prompts are the primary way you guide Atto to generate accurate and relevant test cases. A well-written prompt tells Atto what you're testing, how it works, and what you are expecting to see.

You’re not “using Atto.” You’re working with Atto, your coworker who works fast, follows instructions, and doesn’t guess. 

---

## **Why Prompts Matter?**
In AI-augmented testing, prompting is context engineering. You're not just giving instructions; you're shaping Atto’s understanding of the feature, constraints, and test goals.

**Good prompts lead to:**
- More relevant and precise test cases
- Better edge case handling
- Smarter suggestions and optimizations
- Less back-and-forth and reduced rework

---

## **What Makes a Good Prompt?**
Think of a prompt like a well-written test case title or bug report. It should be clear, contextual, and actionable.

**Use the WHO + WHAT + WHY + HOW + EXAMPLES model:**



| **Element** | **Description**                             | **Example**                                             |
|-------------|---------------------------------------------|--------------------------------------------------------|
| **WHO**     | User role or system under test              | “As a registered user…”                                |
| **WHAT**    | Feature or action being tested              | “…resetting a password…”                               |
| **WHY**     | Purpose or expected behavior                | “…to ensure expired tokens are handled.”               |
| **HOW**     | Constraints, variations, platforms          | “Include 2FA and expired token scenarios.”             |
| **EXAMPLES**| Seed inputs or expected output              | “E.g., the token expires after 10 minutes.”            |

---

## **Prompt Builder Checklist**

Use this framework to structure your prompt before submitting it:
- **Goal**: What do you want Atto to generate or help with?
- **Context**: What feature, flow, or user story is involved?
- **Inputs**: Did you attach Stories, Files, Designs and other relevant files?
- **Edge Cases**: Any tricky or high-risk conditions to include?

If that’s all in, you’re good!

---

## **Pro Tips**
- **Use personas**: “As a manual tester…” or “As a mobile user…”
- Tag old stories, test cases, or flows if they’re relevant
- **Refine iteratively**: Refine tests with Atto to make them test-ready.

---

## **Prompt Templates and Examples**

Here are some templates along with examples that you can copy-paste and edit based on your needs:

**Template 1**

| **Template 1: Test Case Generation Prompt** |
|---------------------------------|
| **Goal:** Generate test cases for **[feature or process]**.<br><br>**What I Have:**<br>[User roles or types]<br>[Payment or interaction methods]<br>[Supporting features or integrations]<br><br>**What I Want:**<br>Cover [all combinations / edge cases / failures / retries]<br>Include [validation / exception / third-party behavior]<br><br>**Expected Outcomes:**<br>[Comprehensive coverage / error handling / reliability / messaging] |

**Example:** 

- **Goal**: Generate test cases for an e-commerce checkout process.
- **What I Have**:
   - Guest and logged-in users  
   - Payment methods: Credit Card, UPI, Wallet, COD  
   - Coupon application and address validation  
   - Order confirmation via email and SMS

- **What I Want:**
   - Cover all user types and payment combinations  
   - Include payment failures, coupon misuse, and invalid addresses  \
   - Validate order confirmation triggers

- **Expected Outcomes:**
   - Thorough coverage of all checkout variations  
   - Graceful handling of failures and retries  
   - Reliable confirmation notifications and user feedback

---

**Template 2**

| **Template 2: Test Case Generation Prompt** |
|---------------------------------|
| **Goal:** Generate test cases for **[banking feature]**.<br><br>**What I Have:**<br>[Transfer modes or account types]<br>[User roles: Retail, Corporate, etc.]<br>[Limits, authentication, schedules]<br><br>**What I Want:**<br>Test all valid transfer paths<br>Include invalid account numbers, failed OTPs, and limit breaches<br>Check for audit trails and customer alerts<br><br>**Expected Outcomes:**<br>High-confidence coverage of fund transfer logic<br>Secure, validated, and compliant flows<br>Complete visibility into failures and success tracking |


**Example:** 

- **Goal**: Generate test cases for the funds transfer feature in a banking app.
- **What I Have**:
   - Transfer modes: NEFT, IMPS, RTGS  
   - Users: Retail and Corporate  
   - Daily and per-transaction transfer limits  
   - 2FA with OTP and beneficiary validation
- **What I Want:**
   - Cover all transfer modes with different limits  
   - Include failures due to OTP mismatch, invalid IFSC, and expired sessions  
   - Check logs and notifications for every success/failure
- **Expected Outcomes:**
   - Accurate validation of fund transfers and limit checks  
   - Secure handling of auth failures and retries  
   - Auditable and user-notified transaction outcomes

---

**Template 3**

| **Template 3: Test Case Generation Prompt** |
|---------------------------------|
| **Goal:** Generate test cases for **[travel feature]**.<br><br>**What I Have:**<br>[User types: guest, registered]<br>[Booking types: one-way, round-trip, multi-city]<br>[Payment methods, loyalty points, refund/reschedule policies]<br><br>**What I Want:**<br>Test booking and modification flows across flight types<br>Include failures in passenger input, payment, and rescheduling logic<br>Cover scenarios around refund eligibility and penalties<br><br>**Expected Outcomes:**<br>Full validation of booking and post-booking changes<br>Smooth error recovery for user actions and backend failures<br>User clarity through pricing, penalties, and confirmation messages |


**Example:**
- **Goal**: Generate test cases for flight booking and rescheduling.
- **What I Have**:
   - User types: Guest and Registered  
   - Flight types: One-way, Round-trip, Multi-city  
   - Payment via Cards and Travel Points  
   - Free reschedule within 24 hrs, fee after that
- **What I Want**:
   - Test each flight type for both user roles  
   - Include incorrect passport data, payment timeouts, and invalid rebooking  
   - Check eligibility and behavior for free vs. fee-based changes
- **Expected Outcomes**:
   - Clear, working flows for bookings and updates  
   - Reliable enforcement of rescheduling rules  
   - Accurate pricing, refund, and confirmation at every step

---

> ## **Need help?**
> 
> Have a complex scenario where you need help to write your prompt? We’re all ears. Reach out to our product experts at **replytms@testsigma.com**. 


---