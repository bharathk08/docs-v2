---
title: "JUnit report import"
description: "Imports JUnit XML test results into a test run within a project via file upload."
sidebar:
  label: "JUnit report import"
  badge: { text: POST, variant: caution }
api:
  method: POST
  path: /projects/:project_id/junit-import/test-run/:test_run_id
  baseUrl: https://test-management.testsigma.com/api/v1
  pathParams:
    - { name: "project_id", desc: "Unique identifier of the project to import results into." }
    - { name: "test_run_id", desc: "Identifier of the test run the results are imported against." }
  formData:
    junit_xml: "@results.xml"
  status: 200
  statusText: OK
  responseAttributes:
    - { name: "message", desc: "Status message describing the outcome of the import; may be empty." }
    - { name: "data.import.id", desc: "Unique identifier of the import job created for this upload." }
    - { name: "data.import.status", desc: "Current status of the import (e.g. pending, completed)." }
    - { name: "data.import.test_run_id", desc: "Identifier of the test run the results were imported against." }
    - { name: "data.import.created_at", desc: "Unix timestamp of when the import was initiated." }
  response:
    message: "JUnit results imported successfully."
    data:
      import:
        id: "ebbbcb9f-e532-41dd-9170-369e5ba4539a"
        status: "completed"
        test_run_id: "DEMO-R-4"
        created_at: 1710675200
---
