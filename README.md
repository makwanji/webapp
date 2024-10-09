# WebApp Project

## GitHub Actions CI/CD

[![Build Status](https://github.com/makwanji/webapp/workflows/Build/badge.svg)](https://github.com/makwanji/webapp/actions)
[![Test Status](https://github.com/makwanji/webapp/workflows/Test/badge.svg)](https://github.com/makwanji/webapp/actions)


## Tech Stack

| Technology         | Description                                      |
|--------------------|--------------------------------------------------|
| **Java**           | Programming language for the API.                |
| **Spring Boot**    | Framework used to build the RESTful service.     |
| **Spring Data JPA**| ORM framework for interacting with the database. |
| **JWT/OAuth**      | Authentication for securing API endpoints.       |
| **Maven**          | Build tool used for dependency management.       |
| **Jackson**        | JSON parsing library to read the JSON file.      |


## Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/makwanji/webapp.git
   cd webapp
   ```

2. Build and run the project:
   ```bash
   mvn spring-boot:run
   ```

3. The application will be accessible at `http://localhost:8080`.

4. Test the endpoints using a tool like **Postman** or **curl**.


## How to Contribute

1. Fork the project.
2. Create a new branch for your feature or bugfix.
3. Create a Pull Request to the `main` branch.


poc-cicd
