---
title: "Update test step"
description: "Modify an existing test step's action, position, or disabled state."
sidebar:
  label: "Update test step"
  badge: { text: PUT, variant: note }
api:
  method: PUT
  path: /test_cases/:test_case_id/test_steps/:step_id
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: test_case_id, desc: "ID of the test case that contains the step." }
    - { name: step_id, desc: "ID of the step to update." }
  bodyFields:
    - { name: action, desc: "Updated NLP action string." }
    - { name: position, desc: "Updated position in the test case." }
    - { name: disabled, desc: "Set to true to disable the step." }
    - { name: type, desc: "Step type — ACTION or VERIFY." }
  requestBody:
    action: "Click on the Sign In button"
    position: 4
    type: "ACTION"
    disabled: false
  responseAttributes:
    - { name: id, desc: "Step ID." }
    - { name: action, desc: "Updated action string." }
    - { name: position, desc: "Updated position." }
    - { name: disabled, desc: "Disabled state." }
  response:
    id: 504
    testCaseId: 200
    position: 4
    action: "Click on the Sign In button"
    type: "ACTION"
    disabled: false
    updatedById: 9
---
