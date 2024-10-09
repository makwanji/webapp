# Terrafrom script


### Terrafrom Commands:

```bash
# Export AWS Profile
export AWS_PROFILE=poc-cicd

# Create S3 bucket
aws s3api create-bucket --bucket terraform-state-dev-poc-cicd --region ap-southeast-1

# TF Plan
cd terraform
terraform plan -var-file="0-terraform.tfvars"

#TF Apply
terraform apply -var-file="0-terraform.tfvars" -auto-approve
```
