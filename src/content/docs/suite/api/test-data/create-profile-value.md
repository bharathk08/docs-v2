---
title: "Create profile value"
description: "Add a new key-value entry to an existing test data profile."
sidebar:
  label: "Create profile value"
  badge: { text: PATCH, variant: default }
api:
  method: PATCH
  path: /test_data/:profile_id/data
  baseUrl: https://app.testsigma.com/api/v1
  pathParams:
    - { name: profile_id, desc: "ID of the test data profile to add the value to." }
  bodyFields:
    - { name: key, desc: "The parameter name (column header) in the data profile." }
    - { name: value, desc: "The value to set for this entry." }
    - { name: isEncrypted, desc: "Set to true to store the value encrypted (for passwords, secrets)." }
  requestBody:
    key: "username"
    value: "testuser@example.com"
    isEncrypted: false
  responseAttributes:
    - { name: id, desc: "ID of the new profile data entry." }
    - { name: key, desc: "The parameter name." }
    - { name: value, desc: "The stored value." }
    - { name: isEncrypted, desc: "Whether the value is encrypted." }
    - { name: testDataProfileId, desc: "ID of the parent test data profile." }
  response:
    id: 301
    key: "username"
    value: "testuser@example.com"
    isEncrypted: false
    testDataProfileId: 45
    createdById: 9
    createdDate: 1680100000000
---
