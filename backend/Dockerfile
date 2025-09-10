# stage 1
FROM node:21 AS backend-builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependenices
RUN npm i

# Copy the rest of the application code
COPY . .

# Stage 2
FROM node:21-slim

#Set the working directory of /app
WORKDIR /app

# Copy built assets and dependencies from backend-builder stage
COPY --from=backend-builder /app .

# Copy the .env.sample to .env
COPY .env.sample .env

# Expose port 3001 for the node.js application
EXPOSE 3001

# Command to run the application in development mode
CMD ["npm", "start"]

