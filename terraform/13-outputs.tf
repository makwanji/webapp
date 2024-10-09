# ECR
output "ecr" {
  value       = awscc_ecr_repository.poc-cicd-ecr-db.repository_uri
  description = "ACR Repo URI"
}

