---
title: "Create test step"
description: "Add a new step to an existing test case."
sidebar:
  label: "Create test step"
  badge: { text: POST, variant: caution }
api:
  method: POST
  path: /test_cases/:test_case_id/test_steps
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: test_case_id, desc: "ID of the test case to add the step to." }
  bodyFields:
    - { name: position, desc: "Order position for the step (1-indexed)." }
    - { name: action, desc: "NLP action string that defines what the step does." }
    - { name: type, desc: "Step type — ACTION or VERIFY." }
    - { name: disabled, desc: "Set to true to disable the step without deleting it." }
  requestBody:
    position: 4
    action: "Click on the Login button"
    type: "ACTION"
    disabled: false
  responseAttributes:
    - { name: id, desc: "ID of the newly created step." }
    - { name: testCaseId, desc: "Parent test case ID." }
    - { name: position, desc: "Position of the step in the test case." }
    - { name: action, desc: "The action string." }
    - { name: type, desc: "Step type." }
  response:
    id: 504
    testCaseId: 200
    position: 4
    action: "Click on the Login button"
    type: "ACTION"
    disabled: false
    createdById: 9
---
