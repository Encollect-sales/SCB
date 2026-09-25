# Use the official Cypress base image with Node.js included
FROM cypress/base:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies, including Cypress
RUN npm i

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable to disable color output in Cypress (optional)
ENV NO_COLOR=1

# Command to run Cypress tests (can be overridden in Jenkins pipeline)
CMD ["npx", "cypress", "run"]
