---
title: "Update profile value"
description: "Update an existing key-value entry in a test data profile."
sidebar:
  label: "Update profile value"
  badge: { text: PATCH, variant: default }
api:
  method: PATCH
  path: /test_data/:profile_id/data/:entry_id
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: profile_id, desc: "ID of the test data profile." }
    - { name: entry_id, desc: "ID of the specific data entry to update." }
  bodyFields:
    - { name: value, desc: "The new value to store." }
    - { name: isEncrypted, desc: "Set to true to store the value encrypted." }
  requestBody:
    value: "updateduser@example.com"
    isEncrypted: false
  responseAttributes:
    - { name: id, desc: "Entry ID." }
    - { name: key, desc: "The parameter name (unchanged)." }
    - { name: value, desc: "The updated value." }
    - { name: isEncrypted, desc: "Whether the value is encrypted." }
    - { name: updatedDate, desc: "Epoch timestamp of the update." }
  response:
    id: 301
    key: "username"
    value: "updateduser@example.com"
    isEncrypted: false
    testDataProfileId: 45
    updatedById: 9
    updatedDate: 1680200000000
---
