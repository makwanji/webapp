resource "awscc_ecr_repository" "poc-cicd-ecr" {
  repository_name      = "poc-cicd-ecr"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}