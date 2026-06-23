---
title: 'Best Practices to Generate Test Cases with Atto'
description: 'Learn best practices to generate comprehensive test cases using Atto’s capabilities | Simplify and accelerate test automation with using the best practoces for test generation'
sidebar:
  order: 14.51
---

<br>

**Maximize the accuracy of AI-generated test cases from Atto by providing structured prompts, high-quality assets, & clear testing goals.**

---

AI-powered test generation in Test Management by Testsigma is only as effective as the inputs you provide. With structured, detailed, and relevant context, you can drastically improve the quality, accuracy, and usefulness of your generated test cases. This article discusses the best practices for using common input types for test case generation. 

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin,
> - Ensure necessary integrations, such as Jira and Figma are connected to Test Management by Testsigma
>
> - Have necessary files, designs, and user stories before starting test generation.


---

## **Prompts**

Prompts are your primary way to communicate your intent to Atto. A well-structured prompt should provide clarity on the goal, the context, and the expected results.

### **Best Practices:**
- **Define the goal clearly**: Describe what you're trying to test or achieve.
- **Attach what you have**: Attach available assets like stories, designs, and files.
- **Describe what you want**: Mention the type of test cases you're expecting, like functional, negative, security, edge cases, etc.
- **Include acceptance or validation criteria**: Help the Atto understand what success looks like.

**Here’s a sample prompt to give you an idea of how to write:**

**Goal**: Generate test cases for an e-commerce checkout flow.

**What I Have**:
- Guest checkout and logged-in checkout options
- Payment methods: Credit Card, UPI, Wallet, COD
- Order confirmation email and SMS

**What I Want**:
- Test all checkout variations
- Include payment failure scenarios
- Cover address validation and coupon application

**Expected Outcomes:**
- Full coverage of the checkout flow
- Identification of failure and retry paths
- Ensure the system gracefully handles exceptions


> **What to Avoid**
> - Avoid vague or one-line prompts like "generate test cases."  (keep it in H3)
> - Don’t leave out dependencies or user roles if they’re relevant.

---

## **Jira Stories**  
Jira stories are often the primary source of truth for features. High-quality stories result in better test cases.

### **Best Practices:**
- **Use a meaningful summary**: It should briefly state the user story or goal.
- **Provide a user-focused description**: Describe the user scenario and expected behavior.
- **Include acceptance criteria**: Define what conditions need to be met for the feature to be considered complete.
- **Attach supporting assets**: Attach diagrams, mockups, Figma links, API endpoints, and relevant files.
- **Add related past stories (if still valid)**: Past stories can provide historical context.

**Here’s an example of a well-written Jira story:**
- **Summary**: Enable guest checkout option
- **Description**: As a guest user, I want to place an order without creating an account so that I can buy products quickly.
- **Acceptance Criteria**:	
   - Users can enter a shipping address without login. 
   - The system saves order with guest details.
   - The user receives email confirmation.

- **Attachments**:
   - Figma mockup
   - API endpoints
   - Flow diagrams

> **What to Avoid**
> - Vague summaries like “guest flow update.”
> - Missing or incomplete acceptance criteria.
> - Stories without any attachments or references.

---

## **Figma Designs**
Figma files help Atto to visualize the UI flow and element relationships. Structured, labeled designs improve accuracy in generated test cases.

### **Best Practices:**
- **Organize frames by feature or flow**: Keep related screens together to maintain context.
- Use clear and consistent naming for frames
   - **Example:** 
     - Checkout - Shipping 
     - Checkout - Payment 
     - Checkout - Confirmation
- **Avoid mixing unrelated flows**: Don't select frames from multiple features in one batch.

---

## **Images**
Use images only when necessary, and ensure they convey clear information.

### **Best Practices:**
- **Use screenshots to show a specific state**
   - **Example**: error messages, confirmation modals, or specific UI conditions.
- **Annotate if necessary**: Highlight relevant areas or elements for clarity.
- **Upload high-quality images**: Avoid blurry images.
- **Use images as supplementary input**: They work best when they’re attached along with Jira stories and prompts.

> **What to Avoid**
> - The entire screenshots with no explanation.
> - Uploading images without context.
> - Large file sizes

---

## **Videos**
Videos are highly effective when there is no written or visual documentation available.

### **Best Practices:**
- **Keep videos short and focused (2–3 minutes max)**
- **Narrate or annotate the flow**: Explain what you’re doing, especially if the workflow isn’t concrete.
- **Highlight key interactions**: Hovering, clicks, validations, and any user decisions should be clearly visible.
- **Ensure good video quality**: Use a screen recording tool and avoid shaky or unclear recordings.

**When to Use**
- You’re demonstrating a complex or interactive feature not yet documented
- You want to show a working prototype or behavior edge cases
- The UI flow is nonlinear or has conditional steps

--- 

## **Bonus Tips**

### **1. Use Test Case Options Effectively**

After generating test cases with Atto, you can curate and enhance the test cases using the following options.
   - **Combine Test Cases**: Merge duplicates or closely related test cases to improve clarity and reduce redundancy.
   - **Remove Irrelevant Cases**: Delete any test cases that do not align with the feature scope or current functionality.
   - **Refine with AI**: Use the Refine with AI option to add missing details like:
     - Test data
     - Verification steps
     - Flow & UI context
       
       ![Refine with AI](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Refine_Tests_with_AI.png)
     
     Refining ensures each test case is actionable, traceable, and ready for manual execution or automation.

### **2. Work Within a Single Feature Context**
To get accurate, focused, and manageable test case generation from Atto, always create a session in Atto’s Home around a single feature or a group of closely related features.
- Group relevant assets such as user stories, Figma designs, API endpoints, and files related to that one feature.
  ![All Inputs for AI](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/All_Inputs_for_AI.png)
- Avoid mixing unrelated contexts in the same session to prevent confusing or inaccurate outputs.
- Use the prompt area effectively by clearly stating:
   - The feature under test
   - The context you’re providing (stories, designs, workflows, etc.)
   - The expected outcomes from the AI-generated test cases
     ![Example Prompt](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Clear_Prompt_Example.png)

---