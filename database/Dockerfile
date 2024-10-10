# Use MongoDB official image as the base image
FROM postgres:15.0

# Accept build arguments and set them as environment variables
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_DB

ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}

# Copy the initialization SQL script into the container
COPY ./init-db.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port (5432 by default)
EXPOSE 5432
