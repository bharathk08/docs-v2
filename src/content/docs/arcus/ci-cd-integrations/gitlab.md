---
title: 'GitLab Integration with Test Management by Testsigma'
description: 'Integrate GitLab with Test Management by Testsigma to automate test executions & generate test reports through CI/CD pipelines | GitLab Integration with TMS by Testsigma'
sidebar:
  order: 17.6
---

<br>

**Integrate GitLab with Test Management by Testsigma and automate your test runs and generate test reports.**

---

Integrate GitLab with Test Management by Testsigma to automate test executions and generate test reports through CI/CD pipelines. This article discusses integrating GitLab with Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure the following:
> - You have a **GitLab** account and a connected project repository.
> - A project and at least one test run exist in Test Management by Testsigma.
> - You have an API token from Test Management by Testsigma.
> - Your test results are generated in JUnit XML format (for example, reports/junit.xml)

---

## **Set Testsigma Secrets in GitLab**

To allow GitLab to communicate securely with Testsigma:

1. Go to your project in GitLab

2. Navigate to **Settings > CI/CD > Variables** and click **Expand**.

3. Add the following environment variables:
   - **TESTSIGMA\_API\_TOKEN**
   - **TESTSIGMA\_PROJECT\_ID**
   - **TESTSIGMA\_RUN\_ID**

4. Click **Save** changes.

---

## **Configure the GitLab Pipeline**

In your project repository, create or update the **.gitlab-ci.yml** file in the root directory with the following configuration:

```yml
stages:
  - upload

upload_testsigma:
  stage: upload
  image: curlimages/curl:8.10.1
  only:
    - main
  script:
    - 'set -eu'
    - 'echo "Looking for reports/junit.xml ..."'
    - 'test -f reports/junit.xml || { echo "File not found: reports/junit.xml"; exit 1; }'
    - 'echo "Uploading JUnit XML to Testsigma..."'
    - 'curl --fail --show-error --location \
        --header "Authorization: Bearer ${TESTSIGMA_API_TOKEN}" \
        --form "junit_xml=@reports/junit.xml" \
        "https://test-management.testsigma.com/api/v1/projects/${TESTSIGMA_PROJECT_ID}/junit-import/test-run/${TESTSIGMA_RUN_ID}"'
    - 'echo "Upload complete."'
```

This configuration performs the following actions:
   - Runs when you push to the main branch.
   - Verifies that the JUnit XML file exists.
   - Upload the test results to your specified Testsigma project and test run.

:::note[NOTE]
- Replace **TESTSIGMA\_PROJECT\_ID** in the curl command with your Project ID. You can find it in your project URL: https://test-management.testsigma.com/ui/projects/{Project_ID}/
- Replace **TESTSIGMA\_RUN\_ID** in the curl command with your **Test Run ID**, available in the **Test Run URL**: https://test-management.testsigma.com/ui/test_runs/{Run_ID}/
- Replace **TESTSIGMA\_API\_TOKEN** with your Testsigma API token stored in GitLab CI/CD variables.
- Ensure the JUnit report path (reports/junit.xml) matches your actual test report file location.
:::

---

## **Triggering the Pipeline**

1. Commit and push your changes to the repository connected to GitLab.

2. GitLab will run the workflow.

3. After completion, the corresponding test run in Test Management by Testsigma will be automatically updated with the test execution results.

---