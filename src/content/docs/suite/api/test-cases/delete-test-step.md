---
title: "Delete test step"
description: "Permanently delete a test step from a test case."
sidebar:
  label: "Delete test step"
  badge: { text: DELETE, variant: danger }
api:
  method: DELETE
  path: /test_cases/:test_case_id/test_steps/:step_id
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: test_case_id, desc: "ID of the test case that contains the step." }
    - { name: step_id, desc: "ID of the step to delete." }
  status: 204
  statusText: No Content
  response: null
  responseAttributes:
    - { name: "(empty)", desc: "Returns 204 No Content on success. No response body." }
---
