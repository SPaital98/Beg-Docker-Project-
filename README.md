🚀 Dockerized Node.js Application

A simple **Node.js web application** containerized using **Docker**.  
This project demonstrates how to package an application into a Docker container and run it locally.

🎯 Project Objective

The goal of this project is to:

- Create a simple **Node.js application**
- Containerize the application using **Docker**
- Build a **Docker Image**
- Run the application inside a **Docker Container**
- Access the application through a **web browser**

# 🏗️ Project Architecture


Node.js Application
↓
Dockerfile
↓
Docker Image
↓
Docker Container
↓
Browser (Port 3000)


🛠️ Tools & Technologies

- Node.js
- Docker
- VS Code
- Web Browser


📁 Project Structure


docker-nodejs-project/
│
├── app.js
├── package.json
└── Dockerfile


⚙️ Application Code

# app.js


const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Docker Beginner Project 🚀");
  res.end();
}).listen(3000);
package.json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "main": "app.js"
}

🐳 Dockerfile

FROM node:18

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

🧠 Dockerfile Explanation

Instruction	Description

FROM node:18	Uses official Node.js base image
WORKDIR /app	Sets working directory inside container
COPY . .	Copies project files into container
EXPOSE 3000	Documents the container port
CMD	Runs the Node.js application

🔨 Build Docker Image

Run the following command inside the project folder:

docker build -t docker-node-app .

Check the images:

docker images

▶ Run Docker Container

docker run -d -p 3000:3000 --name my-container docker-node-app

Check running containers:

docker ps

🌐 Access the Application

Open your browser and go to:

http://localhost:3000

You should see:

Hello from Docker Beginner Project 🚀

🛑 Stop and Remove Container

Stop the container:

docker stop my-container

Remove the container:

docker rm my-container

🎯 Project Outcome

Developed a Node.js application

Containerized the application using Docker

Built a Docker image

Deployed the application using a Docker container

Accessed the application through a browser
