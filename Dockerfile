# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Expose port 8080
EXPOSE 8080

# Define the command to run your app
CMD ["node", "app.js"]
