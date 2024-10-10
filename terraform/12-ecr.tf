resource "awscc_ecr_repository" "productservice-db" {
  repository_name      = "productservice-db"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}

resource "awscc_ecr_repository" "productservice-app" {
  repository_name      = "productservice-app"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}

resource "awscc_ecr_repository" "productservice-web" {
  repository_name      = "productservice-web"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration = {
    scan_on_push = true
  }
}
