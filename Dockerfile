# syntax=docker/dockerfile:1

# Use node image as base
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all stages
WORKDIR /usr/src/app

################################################################################
# Create a stage for installing production dependencies.
FROM base as deps

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a new stage for the actual runtime image.
FROM base as final

# Use production environment
ENV NODE_ENV production

# Run the application as a non-privileged user.
USER node

# Copy package.json so that package manager commands can be used.
COPY package.json .

# Copy the dependencies from the deps stage.
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD node server.js
