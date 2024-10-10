#!/bin/bash
docker build --build-arg POSTGRES_USER=${POSTGRES_USER} \
  --build-arg POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
  --build-arg POSTGRES_DB=${POSTGRES_DB} \
  -t webapp-postgres:v0.0.1 .

docker run -e POSTGRES_USER=${POSTGRES_USER} \
  -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} \
  -e POSTGRES_DB=${POSTGRES_DB} \
  -p 5432:5432 \
  webapp-postgres:v0.0.1
