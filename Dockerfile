# Use an official Node runtime as a parent image
FROM node:18.17.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy files to working dir
COPY . .

# Install any needed packages
RUN npm install

# Compile TypeScript
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
CMD ["node", "dist/main.js"]
