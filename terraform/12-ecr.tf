resource "awscc_ecr_repository" "poc-cicd-ecr-db" {
  repository_name      = "poc-cicd-ecr-db"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}

resource "awscc_ecr_repository" "poc-cicd-ecr-app" {
  repository_name      = "poc-cicd-ecr-app"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}

resource "awscc_ecr_repository" "poc-cicd-ecr-web" {
  repository_name      = "poc-cicd-ecr-web"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}
