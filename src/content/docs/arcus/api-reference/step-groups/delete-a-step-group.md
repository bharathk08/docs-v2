---
title: "Delete a step group"
description: "Permanently deletes a specific step group from a project."
sidebar:
  label: "Delete a step group"
  badge: { text: DELETE, variant: danger }
api:
  method: DELETE
  path: /projects/:project_id/step_groups/:step_group_id
  baseUrl: https://test-management.testsigma.com/api/v1
  pathParams:
    - { name: "project_id", desc: "Unique identifier of the project the step group will be deleted from." }
    - { name: "step_group_id", desc: "Identifier of the step group to delete." }
  status: 204
  statusText: No Content
  responseAttributes:
    - { name: "message", desc: "Status message confirming the step group was deleted; may be empty." }
  response:
    message: ""
---
