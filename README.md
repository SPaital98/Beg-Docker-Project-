🎯 Project Goal

Create a simple Node.js application

Containerize it using Docker

Build Docker image

Run Docker container

Access app in browser

Push project to GitHub

🏗️ Architecture

Node.js App
    ↓
Dockerfile
    ↓
Docker Image
    ↓
Docker Container
    ↓
Browser (Port 3000)

📁 Project Setup (Local Machine – VS Code)

✅ Step 1: Create Project Folder
mkdir docker-nodejs-project
cd docker-nodejs-project
🔹 Create app.js

const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Docker Beginner Project 🚀");
  res.end();
}).listen(3000);

🔹 Create package.json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "main": "app.js"
}

🐳 Step 2: Create Dockerfile

Create a file named Dockerfile:

FROM node:18

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

🧠 Dockerfile Explanation
Instruction	Purpose
FROM node:18	Uses official Node.js image
WORKDIR /app	Sets working directory inside container
COPY . .	Copies project files to container
EXPOSE 3000	Documents container port
CMD	Runs the application

🔨 Step 3: Build Docker Image

Inside project folder:

docker build -t docker-node-app .

Check image:

docker images

You should see:

docker-node-app

▶ Step 4: Run Docker Container

docker run -d -p 3000:3000 --name my-container docker-node-app

Check running container:

docker ps

🌐 Step 5: Access Application

Open browser:

http://localhost:3000

You should see:

Hello from Docker Beginner Project 🚀

🎉 Your Docker app is running successfully!

🛑 Step 6: Stop & Remove Container

Stop container:

docker stop container_id

Remove container:

docker rm container_id

📁 Final Project Structure
docker-nodejs-project/
│
├── app.js
├── package.json
└── Dockerfile