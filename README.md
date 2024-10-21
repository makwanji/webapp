# **WebApp Project**

## **Overview**
This repository contains the source code for the WebApp project, covering both frontend and backend components. The project is integrated with a comprehensive CI/CD pipeline, secret scanning, and DevSecOps best practices.

### **Table of Contents**
1. [GitHub Actions CI/CD](#github-actions-cicd)
2. [Tech Stack](#tech-stack)
3. [Running the Application](#running-the-application)
4. [Secret Scanning](#secret-scanning)
5. [MongoDB Database](#mongodb-database)
6. [How to Contribute](#how-to-contribute)
7. [Troubleshooting & Logs](#troubleshooting-and-logs)
8. [DevSecOps Details](#devsecops-details)
9. [Subfolders Information](#subfolders-information)

## **GitHub Actions CI/CD**
Automated pipelines are set up to build, test, and deploy the application using GitHub Actions.

[![Build Status](https://github.com/makwanji/webapp/workflows/Build/badge.svg)](https://github.com/makwanji/webapp/actions)
[![Test Status](https://github.com/makwanji/webapp/workflows/Test/badge.svg)](https://github.com/makwanji/webapp/actions)

## **Access Application**
You can access the live application at:
App - http://psdev.adnovumlabs.com
Sonar - http://sonar.adnovumlabs.com:9900/



## **Tech Stack**

| Technology         | Description                                      |
|--------------------|--------------------------------------------------|
| **Node.js**         | Backend development                              |
| **React.js**        | Frontend development                             |
| **PostgreSQL**      | Database                                         |

## **Secret Scanning**

The project uses tools like **Trufflehog** and **Gitleaks** to scan for sensitive data leaks in the codebase. Regular secret scans help ensure security.


9900

SonarQube

### **Security Scanning Tools**

In a DevSecOps environment, integrating various security scanning tools into the CI/CD pipeline is essential. This section details the types of scans implemented in this project, as well as recommended open-source tools for each.

| **Security Level**                    | **Tools Used** | **Options**                                            | **Description**                                                                 |
|----------------------------------     |------------------------------------------------------ |------------------------------------------------------|---------------------------------------------------------------------------------|
| **Secret Scan**                       | **Gitleaks** | **TruffleHog**, **GitGuardian**        | Scans source code and history to detect sensitive information like secrets and tokens. |
| **Infrastructure as Code (IaC) Scan** | **Checkov**, **TFLint**                |  **Terrascan**               | Scans Terraform code to detect security vulnerabilities, compliance violations, and misconfigurations. |
| **Application Code Scan (SAST)**      | **SonarQube**| **Bandit**, **Semgrep**               | Static analysis tools to detect code quality issues, vulnerabilities, and potential security flaws in the source code. |
| **Container/Image Scan**              | **Trivy**| **Clair**, **Grype**                      | Scans Docker images for vulnerabilities and compliance issues.                   |
| **Deployment Code Scan**              |        | **Kube-bench**, **Kube-hunter**, **Kubescape**       | Scans Kubernetes deployments for security risks, best practices, and compliance checks. |

### **Usage Example:**

#### **Trufflehog:**
```bash
trufflehog filesystem .
```

#### **Gitleaks:**
```bash
gitleaks dir backend
gitleaks dir frontend
```


## **Troubleshooting and Logs**

- **DB Build Failure (image issue):**
  [Link to Failed Build](https://github.com/makwanji/webapp/actions/runs/11266635667)

- **DB Build Success:**
  [Link to Successful Build](https://github.com/makwanji/webapp/actions/runs/11266665893)

- **Terraform Pipeline (format issue):**
  [Link to Issue](https://github.com/makwanji/webapp/actions/runs/11266909631/job/31331167223)

- **Terraform Lint Failure:**
  [Link to Lint Failure](https://github.com/makwanji/webapp/actions/runs/11266953941/job/31331277207)

- **Terraform Pipeline Success:**
  [Link to Success](https://github.com/makwanji/webapp/actions/runs/11267320663)

- **Backend Pipeline Success:**
  [Link to Backend Success](https://github.com/makwanji/webapp/actions/runs/11285511809)

## **DevSecOps Details**
This project adheres to DevSecOps practices to ensure security is integrated throughout the development lifecycle. Below are some key components:

### **Security Practices**
- **Static Application Security Testing (SAST)** using GitHub Actions.
- **Dynamic Application Security Testing (DAST)** to verify the deployed applications.
- Integration of **OWASP security scanning**.
- **Code quality** and **security scanning** using **pylint** and **bandit**.
- Implementing **container signing** with tools like **Notary** and **Sigstore** to ensure the integrity of containers.

### **Automated Pipeline Features**
- **CI/CD pipeline** automatically scans for vulnerabilities at every stage (Dev, QA, Prod).
- Manual approval required for production deployments.
- **Slack notifications** to update deployment status.

## **Subfolders Information**
Each subfolder contains a `README.md` file with detailed information on how to run and configure the respective service:

- **Terrafrom Folder:**
   - Contains instructions for creating Infra for this project.
   - [Backend README](terrafrom/README.md)

- **Database Folder:**
   - Contains instructions for running the database service.
   - [Backend README](database/README.md)

- **Backend Folder:**
   - Contains instructions for running the backend service.
   - [Backend README](backend/README.md)

- **Frontend Folder:**
   - Contains instructions for setting up and running the frontend.
   - [Frontend README](frontend/README.md)

- **Deploy Folder:**
   - Contains instructions for deploying this application.
   - [Backend README](deploy/README.md)


```bash

terrafrom
 - checko

 k8s - checoko
 -
 helm
 -
 -
 -
 -
 -
 opensource - securty scanning.
 - explore more secret
 -
 - sonarqube
 -
 trivi

 - codesign / imagesign / notarry
 -
 -
 - IAST
 -
 -
 -
 - repo, app, image, choko,
 -
 - firewall
 -


```
sonar-scanner \
  -Dsonar.projectKey=backend \
  -Dsonar.sources=backend \
  -Dsonar.host.url=http://sonar.adnovumlabs.com:9900 \
  -Dsonar.token=sqp_31fa610082cc3f40f57d24c12bece969888ce501