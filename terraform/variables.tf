variable "sso_principal_arn" {
  description = "SSO Arn."
  type        = string
  sensitive   = true
  default     = "arn:aws:iam::851725219470:role/aws-reserved/sso.amazonaws.com/eu-central-1/AWSReservedSSO_AdnAccountFullAccess_94a9e9fa13eb7e4f"
}
