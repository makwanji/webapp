# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (for future reference if there are build steps)
# RUN npm run build   # Uncomment if there is a build process (e.g., for React frontend)

# Stage 2: Production Stage
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy the production dependencies from the build stage
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app .

# Expose application port
EXPOSE 3000
CMD ["node", "app.js"]
