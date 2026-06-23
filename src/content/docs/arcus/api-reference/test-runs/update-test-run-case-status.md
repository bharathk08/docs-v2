---
title: "Update test run case status"
description: "Updates the execution status of one or more test cases within a test run."
sidebar:
  label: "Update test run case status"
  badge: { text: PUT, variant: note }
api:
  method: PUT
  path: /projects/:project_id/test_runs/:test_run_id/test_cases
  baseUrl: https://test-management.testsigma.com/api/v1
  pathParams:
    - { name: "project_id", desc: "Unique identifier of the project the test run belongs to." }
    - { name: "test_run_id", desc: "Identifier of the test run whose test cases are updated." }
  bodyFields:
    - { name: "test_run_cases", desc: "Array of test case updates to apply." }
    - { name: "test_run_cases[].test_case_id", desc: "Unique identifier of the test case to update." }
    - { name: "test_run_cases[].test_run_status_id", desc: "Identifier of the status to set for the test case." }
    - { name: "test_run_cases[].user_id", desc: "Unique identifier of the user executing the test case." }
    - { name: "test_run_cases[].description", desc: "Additional details about the test case execution." }
  requestBody:
    test_run_cases:
      - test_case_id: "1c4a6347-dec5-4f8e-8b6c-cda33c37c9ce"
        test_run_status_id: "0ba381b5-c018-40c6-b6fa-10d6e556ef9d"
        user_id: "05782b39-7a2c-4e91-9d6b-8f1340c2ab5e"
        description: "Test case completed successfully"
  status: 200
  statusText: OK
  responseAttributes:
    - { name: "message", desc: "Confirmation message for the update; may be empty." }
    - { name: "data.test_run_cases[].test_case_id", desc: "Unique identifier of the updated test case." }
    - { name: "data.test_run_cases[].test_run_status_id", desc: "Identifier of the status applied to the test case." }
    - { name: "data.test_run_cases[].user_id", desc: "Unique identifier of the user who executed the test case." }
    - { name: "data.test_run_cases[].updated_at", desc: "Unix timestamp of when the test case was updated." }
  response:
    message: "Test run cases updated successfully."
    data:
      test_run_cases:
        - test_case_id: "1c4a6347-dec5-4f8e-8b6c-cda33c37c9ce"
          test_run_status_id: "0ba381b5-c018-40c6-b6fa-10d6e556ef9d"
          user_id: "05782b39-7a2c-4e91-9d6b-8f1340c2ab5e"
          updated_at: 1710761600
---
