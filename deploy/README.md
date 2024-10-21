# Deploy application


kubectl create secret docker-registry regcred \
  --docker-server=869388145954.dkr.ecr.ap-southeast-1.amazonaws.com \
  --docker-username=AWS \
  --docker-password=$(aws ecr get-login-password) \
  -n ps



docker tag webapp-postgres:v0.0.1 makwanji/webapp-postgres:v0.0.1
docker tag webapp-back:v0.0.4 makwanji/webapp-back:v0.0.4
docker tag webapp-front:v0.0.7 makwanji/webapp-front:v0.0.7

docker tag webapp-back:v0.0.5 makwanji/webapp-back:v0.0.5 ; docker push makwanji/webapp-back:v0.0.5

docker tag webapp-front:v0.0.8 makwanji/webapp-front:v0.0.8 ; docker push makwanji/webapp-front:v0.0.8

