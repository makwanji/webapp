#!/bin/bash

docker run -d -p 27017:27017 --name mongodb_container \
  -e MONGO_INITDB_ROOT_USERNAME=$MONGO_INITDB_ROOT_USERNAME \
  -e MONGO_INITDB_ROOT_PASSWORD=$MONGO_INITDB_ROOT_PASSWORD \
  -e MONGO_INITDB_DATABASE=$MONGO_INITDB_DATABASE \
  your_dockerhub_username/mongodb-custom:latest
