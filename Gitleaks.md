Gitleaks is a **secrets detection tool** that scans your Git repositories for sensitive information like API keys, passwords, or other credentials. It's designed to prevent accidental leakage of secrets by scanning the repository's commit history and file changes, including past commits, for any sensitive data. Here's an overview of how Gitleaks works:

### 1. **Installation**:
   - You can install Gitleaks using different package managers or directly via a binary download. It supports Linux, macOS, and Windows.
   - Example for installation using Go:
     ```bash
     go install github.com/gitleaks/gitleaks/v8/cmd/gitleaks@latest
     ```

### 2. **Execution**:
   - Gitleaks is executed via the command line, where it can be run in different modes depending on what you want to scan.
   - It works by checking the git repository for any hardcoded secrets in the codebase. This can be done for the local repository or a remote one.

   Example of running Gitleaks to scan the entire Git history:
   ```bash
   gitleaks detect --source . --report=gitleaks-report.json
   ```

### 3. **Configuration**:
   - Gitleaks uses a **config file** to define the types of patterns or regex rules to search for. It can be customized to look for specific patterns (e.g., AWS keys, database credentials).
   - You can either use the default configuration provided by Gitleaks or create your own by modifying the `.gitleaks.toml` file.
   - Example:
     ```toml
     [[rules]]
     description = "AWS Access Key"
     regex = '''AKIA[0-9A-Z]{16}'''
     tags = ["key", "AWS"]
     ```

### 4. **Modes of Scanning**:
   Gitleaks provides multiple options for scanning, depending on the use case:

   - **Pre-commit scans**: Scan files before they are committed using a pre-commit hook to prevent secrets from being added to the repository.
   - **Full history scans**: Scans all previous commits to detect secrets that may have been committed in the past.
   - **PR scanning**: You can integrate Gitleaks into CI/CD pipelines to scan changes in pull requests for any secrets.

### 5. **Reports**:
   - After scanning, Gitleaks generates a **report** that lists any secrets found, showing the location and the exact line where it was detected.
   - Reports can be generated in JSON, CSV, or other formats, and integrated into your CI pipeline to fail builds if secrets are detected.

### 6. **Integration**:
   - **CI/CD**: Gitleaks can be easily integrated into CI/CD pipelines like GitHub Actions, GitLab CI, Jenkins, and others. This allows you to automatically scan for secrets during the build or deployment process.
   - **Pre-commit hooks**: You can set up Gitleaks as a pre-commit hook to prevent developers from accidentally committing secrets.
   - Example for GitHub Actions:
     ```yaml
     name: Secret Scan

     on: [push, pull_request]

     jobs:
       gitleaks:
         runs-on: ubuntu-latest
         steps:
         - uses: actions/checkout@v2
         - name: Run Gitleaks
           uses: zricethezav/gitleaks-action@v2
     ```

### 7. **False Positives**:
   - Gitleaks uses regex-based patterns, so sometimes it can flag false positives. To manage this, you can fine-tune the configuration file or add **whitelisting** rules to ignore certain paths or patterns.

### 8. **Preventing Future Leaks**:
   - Once Gitleaks detects a secret, you should take immediate steps to **revoke** the secret and rotate it.
   - Prevent future leaks by adding Gitleaks as part of your development workflow using **pre-commit hooks** or **automated CI scans**.

---

Here's how you can add **Gitleaks** to your **GitHub Actions** workflow, set it up as part of a **pre-commit hook**, and tailor it to run across your three folders (`backend`, `frontend`, `terraform`) with custom patterns.

---


# Gitleaks in GitHub Action

--

### 1. **Steps to Add Gitleaks in GitHub Action**

You can add Gitleaks to your GitHub Actions pipeline to run on every pull request or commit, generate a report in JSON format, and upload it as an artifact.

#### GitHub Action Workflow File (`.github/workflows/gitleaks.yml`):

```yaml
name: Gitleaks Secret Scan

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  secret-scan:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Gitleaks
        uses: zricethezav/gitleaks-action@v2.3.0

      - name: Run Gitleaks
        run: gitleaks detect --source . --report-format json --report-path gitleaks-report.json

      - name: Upload Gitleaks Report as Artifact
        uses: actions/upload-artifact@v3
        with:
          name: gitleaks-report
          path: gitleaks-report.json
```

### Key Steps:
1. **Checkout Code**: This pulls the repository’s code for Gitleaks to scan.
2. **Set up Gitleaks**: Uses the Gitleaks Action to install and run Gitleaks.
3. **Run Gitleaks**: Runs the Gitleaks scan across the whole repository, outputs the results in JSON, and stores them in `gitleaks-report.json`.
4. **Upload Artifact**: Uploads the `gitleaks-report.json` file as an artifact so that you can download it from the Actions run page.

---

### 2. **Steps to Add Gitleaks as Part of Pre-Commit Hook**

You can integrate Gitleaks as a **pre-commit** hook to ensure that no secrets are committed to the repository.

#### Install Pre-commit in Your Repo
1. **Install pre-commit**:
   ```bash
   pip install pre-commit
   ```

2. **Create a `.pre-commit-config.yaml` file**:
   ```yaml
   repos:
     - repo: https://github.com/zricethezav/gitleaks
       rev: v8.14.0 # Specify the latest version
       hooks:
         - id: gitleaks
           args: ["--verbose", "--source=."]
   ```

3. **Install the pre-commit hook**:
   ```bash
   pre-commit install
   ```

#### Verify Pre-commit Setup:
- After setup, every time a commit is made, the Gitleaks scan will run. If it detects any secrets, the commit will be blocked.

---

### 3. **Custom Gitleaks Scanning for Different Folders (Backend, Frontend, Terraform)**

Yes, for specific types of code (Node.js, React, Terraform), it’s often helpful to apply different patterns. You can achieve this by defining different Gitleaks configuration files for each folder.

#### Create Custom `.gitleaks.toml` Files for Each Folder:

##### Example of `.gitleaks.toml` for `backend/` (Node.js):
```toml
[[rules]]
description = "Node.js JWT Secret"
regex = '''jwtsecret=.{8,}'''
tags = ["node", "secret"]
```

##### Example of `.gitleaks.toml` for `frontend/` (React):
```toml
[[rules]]
description = "React API Key"
regex = '''apiKey=[A-Za-z0-9]{32}'''
tags = ["react", "api"]
```

##### Example of `.gitleaks.toml` for `terraform/` (Terraform):
```toml
[[rules]]
description = "Terraform AWS Key"
regex = '''aws_access_key_id=[A-Z0-9]{20}'''
tags = ["terraform", "aws"]
```

#### GitHub Actions to Run Gitleaks Separately for Each Folder:

You can add different jobs in your GitHub Actions workflow to run Gitleaks with different patterns for each folder.

```yaml
name: Gitleaks Secret Scan for Folders

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  backend-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Gitleaks
        uses: zricethezav/gitleaks-action@v2.3.0

      - name: Run Gitleaks for Backend
        run: gitleaks detect --source=./backend --config=.gitleaks-backend.toml --report-format=json --report-path=gitleaks-backend-report.json

      - name: Upload Backend Gitleaks Report
        uses: actions/upload-artifact@v3
        with:
          name: gitleaks-backend-report
          path: gitleaks-backend-report.json

  frontend-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Gitleaks
        uses: zricethezav/gitleaks-action@v2.3.0

      - name: Run Gitleaks for Frontend
        run: gitleaks detect --source=./frontend --config=.gitleaks-frontend.toml --report-format=json --report-path=gitleaks-frontend-report.json

      - name: Upload Frontend Gitleaks Report
        uses: actions/upload-artifact@v3
        with:
          name: gitleaks-frontend-report
          path: gitleaks-frontend-report.json

  terraform-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Gitleaks
        uses: zricethezav/gitleaks-action@v2.3.0

      - name: Run Gitleaks for Terraform
        run: gitleaks detect --source=./terraform --config=.gitleaks-terraform.toml --report-format=json --report-path=gitleaks-terraform-report.json

      - name: Upload Terraform Gitleaks Report
        uses: actions/upload-artifact@v3
        with:
          name: gitleaks-terraform-report
          path: gitleaks-terraform-report.json
```

### Explanation:
- **Three separate jobs**: Each job runs Gitleaks for a specific folder (`backend`, `frontend`, `terraform`) using different config files (`.gitleaks-backend.toml`, `.gitleaks-frontend.toml`, `.gitleaks-terraform.toml`).
- **Custom config files**: Each folder can have its own `.gitleaks.toml` to define custom regex rules tailored for that folder's codebase.
- **Reports**: Each job generates a separate report (`gitleaks-backend-report.json`, `gitleaks-frontend-report.json`, and `gitleaks-terraform-report.json`) and uploads them as artifacts.

