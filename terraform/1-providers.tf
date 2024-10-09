provider "aws" {
  region = local.region
}

terraform {
  required_version = ">= 1.0"

  backend "s3" {
    bucket = "terraform-state-dev-poc-cicd"
    key    = "eks/terraform.tfstate"
    region = "ap-southeast-1"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.53"
    }
  }
}
