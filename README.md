
Construction Management Backend API

A RESTful backend service built using Node.js, Express, MySQL, and Sequelize ORM for managing construction projects and daily progress reports.

This API supports user authentication, project management, and daily progress reporting with JWT-based authentication and role-based access control.

Tech Stack

Backend

Node.js

Express.js

Database

MySQL

ORM

Sequelize

Authentication

JWT (jsonwebtoken)

bcryptjs for password hashing

Other Tools

dotenv

cors

Postman (API testing)


Project Structure

construction-backend


<img width="687" height="708" alt="image" src="https://github.com/user-attachments/assets/f635e833-27d0-4230-8f5f-efbce0abf7a8" />


Database Schema

The system uses three main tables:

Users

<img width="784" height="460" alt="image" src="https://github.com/user-attachments/assets/cd2944b8-eb62-4ebd-a64b-f90b8487086b" />


<img width="720" height="477" alt="image" src="https://github.com/user-attachments/assets/cc74cf17-71aa-42d0-9616-b24c7f99fc6c" />



<img width="729" height="464" alt="image" src="https://github.com/user-attachments/assets/feef9458-6d46-4558-b999-d40b1dcf2dce" />

Setup Instructions
1 Install Dependencies
npm install
2 Create Environment File

Create a .env file using .env.example as reference.

Example:

PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=construction_app
DB_USER=root
DB_PASSWORD=your_mysql_password

JWT_SECRET=your_secret_key
3 Setup MySQL Database

Run the SQL script:

sql/schema.sql

This will create all required tables.

4 Run the Server
npm start

or

node server.js

Server will start at:

http://localhost:5000
API Endpoints
Authentication
Register User
POST /auth/register

Example Request

{
"name": "John Doe",
"email": "john@example.com",
"password": "123456",
"role": "admin"
}

Response

userId
success message
Login
POST /auth/login

Request

{
"email": "john@example.com",
"password": "123456"
}

Response

JWT token + user details
Project APIs
Create Project
POST /projects

Access: Admin / Manager

Get All Projects
GET /projects

Query Parameters

status
limit
offset

Example

/projects?status=active
Get Project Details
GET /projects/:id

Returns project information with associated DPRs.

Update Project
PUT /projects/:id
Delete Project
DELETE /projects/:id

Access: Admin only

Daily Progress Reports
Create DPR
POST /projects/:id/dpr

Example Request

{
"date":"2026-03-12",
"work_description":"Concrete pouring completed",
"weather":"Sunny",
"worker_count":25
}
Get DPRs
GET /projects/:id/dpr

Optional Query

?date=2026-03-12
Authentication

Protected routes require JWT token.

Header format:

Authorization: Bearer <JWT_TOKEN>
Postman Collection

All APIs can be tested using the included Postman collection:

postman/construction_api.postman_collection.json

Import this file into Postman to test the APIs.

Features

JWT Authentication

Role-based access control

RESTful API design

MySQL relational database

Sequelize ORM

Modular architecture

Input validation

Error handling

Pagination support

Author

Vishal S R

