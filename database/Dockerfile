# Use MongoDB official image as the base image
FROM mongo:6.0.1

# Accept build arguments and set them as environment variables
ARG MONGO_INITDB_ROOT_USERNAME
ARG MONGO_INITDB_ROOT_PASSWORD
ARG MONGO_INITDB_DATABASE

ENV MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME}
ENV MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
ENV MONGO_INITDB_DATABASE=${MONGO_INITDB_DATABASE}

# Add a custom MongoDB configuration file
COPY mongod.conf /etc/mongo/mongod.conf

# Add MongoDB initialization scripts (for creating collections, adding initial data)
COPY init-mongo.sh /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# Command to start MongoDB
CMD ["mongod"]
