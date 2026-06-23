---
title: "Get test steps"
description: "Retrieve all steps for a specific test case."
sidebar:
  label: "Get test steps"
  badge: { text: GET, variant: tip }
api:
  method: GET
  path: /test_cases/:test_case_id/test_steps
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: test_case_id, desc: "The ID of the test case whose steps you want to retrieve." }
  responseAttributes:
    - { name: id, desc: "Unique step identifier." }
    - { name: testCaseId, desc: "ID of the parent test case." }
    - { name: position, desc: "Order of the step within the test case (1-indexed)." }
    - { name: action, desc: "NLP or custom action string that defines what the step does." }
    - { name: type, desc: "Step type — ACTION, VERIFY, etc." }
    - { name: disabled, desc: "Whether this step is currently disabled." }
    - { name: createdById, desc: "ID of the user who created the step." }
  response:
    - id: 501
      testCaseId: 200
      position: 1
      action: "Navigate to https://app.testsigma.com"
      type: "ACTION"
      disabled: false
      createdById: 9
    - id: 502
      testCaseId: 200
      position: 2
      action: "Enter test data in the email field"
      type: "ACTION"
      disabled: false
      createdById: 9
    - id: 503
      testCaseId: 200
      position: 3
      action: "Verify that the page title is Login"
      type: "VERIFY"
      disabled: false
      createdById: 9
---
