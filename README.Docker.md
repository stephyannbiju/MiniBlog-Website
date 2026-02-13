# Dockerizing MiniBlog Website

This project is containerized using Docker. Below are instructions on how to build and run the application using Docker and Docker Compose.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running.

## Getting Started

### Using Docker Compose (Recommended)

To start the application in a container:

```bash
docker compose up --build
```

The application will be available at `http://localhost:3000`.

### Using Docker Directly

1. Build the image:
   ```bash
   docker build -t miniblog-website .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 miniblog-website
   ```

## Project Structure

- `Dockerfile`: Instructions for building the Docker image.
- `docker-compose.yml`: Configuration for running the application and its dependencies.
- `.dockerignore`: Files and folders to exclude from the Docker build context.
