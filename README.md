🚀 Dockerized Node.js Application Deployment on AWS EC2

This project demonstrates how to develop a simple **Node.js web application**, containerize it using **Docker**, and deploy the containerized application on an **AWS EC2 instance**.

🎯 Project Objective

The objectives of this project are:

- Develop a simple **Node.js web application**
- Containerize the application using **Docker**
- Build a **Docker image**
- Run the application inside a **Docker container**
- Deploy the containerized application on **AWS EC2**
- Access the application through a **web browser**

🏗️ Project Architecture

Node.js Application
        ↓
     Dockerfile
        ↓
     Docker Image
        ↓
    Docker Container
        ↓
     AWS EC2 Instance
        ↓
Browser (Public IP : 3000)

🛠️ Tools & Technologies

- Node.js
- Docker
- AWS EC2
- VS Code
- Web Browser


📁 Project Structure

docker-nodejs-project
│
├── app.js
├── package.json
└── Dockerfile

⚙️ Application Implementation

1️⃣ app.js

const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Docker Beginner Project 🚀");
  res.end();
}).listen(3000);

This code creates a simple **HTTP server** that runs on **port 3000**.
 
2️⃣ package.json

{
  "name": "docker-demo",
  "version": "1.0.0",
  "main": "app.js"
}

3️⃣ Dockerfile

FROM node:18

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]


🧠 Dockerfile Explanation

| Instruction | Description |
|-------------|-------------|
| FROM node:18 | Uses official Node.js base image |
| WORKDIR /app | Sets working directory inside container |
| COPY . . | Copies project files into container |
| EXPOSE 3000 | Specifies the container port |
| CMD | Runs the Node.js application |


🔨 Build Docker Image

Navigate to the project directory and run:

docker build -t docker-node-app .

Check images:

docker images

▶ Run Docker Container

docker run -d -p 3000:3000 --name my-container docker-node-app

Check running containers:

docker ps
☁️ Deploying on AWS EC2

## Step 1: Launch EC2 Instance

- Go to AWS Console
- Launch a **Linux EC2 instance**
- Allow the following ports in **Security Group**

SSH  → 22
Custom TCP → 3000

## Step 2: Connect to EC2

ssh -i key.pem ec2-user@<EC2-Public-IP>


## Step 3: Install Docker

sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker

## Step 4: Copy or Clone Project

Upload project files or clone repository:

git clone <repository-url>
cd docker-nodejs-project

## Step 5: Build Docker Image on EC2

docker build -t docker-node-app .

## Step 6: Run Docker Container

docker run -d -p 3000:3000 docker-node-app

# 🌐 Access the Application

Open browser and visit:

http://<EC2-Public-IP>:3000


Output:

Hello from Docker Beginner Project 🚀

# 🛑 Manage Container Lifecycle

Stop container:

docker stop container_id

Remove container:

docker rm container_id

List containers:

docker ps


# 🎯 Project Outcome

- Developed a **Node.js web application**
- Containerized the application using **Docker**
- Built a **Docker image**
- Deployed the containerized application on **AWS EC2**
- Managed container lifecycle using Docker commands
- Accessed the application via **public EC2 IP**
