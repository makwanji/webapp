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


# DB Build failed - image issue
https://github.com/makwanji/webapp/actions/runs/11266635667

# DB Build success
https://github.com/makwanji/webapp/actions/runs/11266665893


# Terrafrom pipeline - format issue
https://github.com/makwanji/webapp/actions/runs/11266909631/job/31331167223

# Terrafrom pipeline - TF Lint failed
https://github.com/makwanji/webapp/actions/runs/11266953941/job/31331277207

# Terrafrom pipeline - success
https://github.com/makwanji/webapp/actions/runs/11267320663

# Backed pipeline
https://github.com/makwanji/webapp/actions/runs/11285511809