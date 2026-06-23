---
title: 'Jenkins Integration with Test Management by Testsigma'
description: 'Integrate Jenkins with TMS by Testsigma to automate test executions & generate test reports through CI/CD pipelines | Jenkins Integration with TMS by Testsigma'
sidebar:
  order: 17.1
---

<br>

**Integrate Jenkins with Test Management by Testsigma and automate your test runs and generate test reports.**

---

Integrate Jenkins with Test Management by Testsigma to automate test executions and generate test reports through CI/CD pipelines. This article discusses integrating Jenkins with Test Management by Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure:
> - You have a **Project** in Test Management by Testsigma and **Test Runs** are available.
> - You have an API token from Test Management by Testsigma.
> - You have a **Jenkins** account.

---

## **Configuring Credentials in Jenkins**

1. On the **Jenkins** dashboard, click **Manage Jenkins**.

2. Under **Security**, click **Credentials**.

3. Under **Stores scoped to Jenkins**, click **(global)** in the **Domain** column.

4. On the **Global credentials** page, click **Add Credentials**.

5. In the **Kind** dropdown menu, select **Secret text**.

6. In the **Secret** box, enter your API Token from Test Management by Testsigma.

7. In the **ID** box, enter `TESTSIGMA_API_TOKEN`.

8. Click **Create**.

--- 

## **Steps to Configure Pipeline**

1. On the **Jenkins** dashboard, click **New Item**.

2. In the **Enter an item name** box, enter a name for the pipeline.

3. Select **Pipeline**, and click **OK**.

4. On the **Configuration** page, scroll to the **Pipeline** section.

5. In the **Definition** list, select **Pipeline script**.

6. In the **Script** box, paste the following script:

    ```groovy
    pipeline {
        agent any
        environment {
            TESTSIGMA_API_TOKEN = credentials('TESTSIGMA_API_TOKEN')
        }
        stages {
            stage('Run Tests') {
                steps {
                    // Run your test script here
                    sh './run-tests.sh'
                }
            }
            stage('Upload to Testsigma TMS') {
                steps {
                    // Ensure the test result file exists at the specified path
                    sh '''
                    curl --location 'https://test-management.testsigma.com/api/v1/projects/{Project_ID}/junit-import/test-run/{Run_ID}' \
                    --header "Authorization: Bearer $TESTSIGMA_API_TOKEN" \
                    --form "junit_xml=@target/test-results/test-report.xml"
                    '''
                }
            }
        }
    }
    ```


:::note[NOTE]
- Replace `<Project_ID>` in the curl command with your Project ID, which you can retrieve using the Test Management by Testsigma APIs.
- Replace `<Run_ID>` in the curl command with the Run ID, which is available in the URL when viewing a test run in the format: https://test-management.testsigma.com/ui/test_runs/{Run_ID}/
:::

7. Click **Apply**, and then click **Save**.

---

## **Trigger a Build in Jenkins**

1. On the **Jenkins** dashboard, click the configured pipeline.

2. In the left navigation bar, click **Build Now**.

3. Once the build completes successfully, the test case statuses in the associated test run are updated automatically in Test Management by Testsigma.

---