# ECR
output "ecr" {
  value       = awscc_ecr_repository.productservice-db.repository_uri
  description = "ACR Repo URI"
}

