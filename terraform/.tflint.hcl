// plugin "aws" {
//     enabled = true
//     version = "0.21.1"
//     source  = "github.com/terraform-linters/tflint-ruleset-aws"
// }

// config {
//   call_module_type = "all"
//   ignore_module = {
//     "terraform-aws-modules/vpc/aws"            = true
//     "terraform-aws-modules/security-group/aws" = true
//     "awscc_ecr_repository" = true
//   }
// }


config {
  force               = true
  call_module_type = "all"
  disabled_by_default = false
}

plugin "terraform" {
  enabled = true
  version = "0.5.0"
  source  = "github.com/terraform-linters/tflint-ruleset-terraform"
}

plugin "aws" {
  enabled = true
  version = "0.28.0"
  source  = "github.com/terraform-linters/tflint-ruleset-aws"
}

rule "terraform_required_version" {
  enabled = false
}

rule "terraform_required_providers" {
  enabled = false
}
