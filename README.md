# Smart Canteen Developed using MERN stack
Innovative and dynamic tech to replace the traditional queue system for ordering food.
## App Logo
![App Logo](https://github.com/Abie2023/demo/assets/124857975/0dcf8d98-2d79-414d-9dc9-65ccb3564dad)

## Tagline: "Transforming Dining: Your College Canteen, Reinvented" 

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/your-username/your-repo.svg)](https://github.com/your-username/your-repo/issues)

## Table of Contents
- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Use Case](#use-case)

## About
Simplify, Save Time

## Features


## Demo


## Getting Started

To begin working with this project, please follow the steps outlined below:

1. Clone the repository.
   ```bash
   git clone https://github.com/Abie2023/Smart-Canteen-full-stack.git
   ```
2.  ```bash
    cd frontend
3. ```bash
   npm i
   ```
4. Open a split terminal
   
5. ```bash
   cd backend
6. ```bash
   npm i
   ```
7. ```bash
   echo "" > .env
   ```
8. Get your API keys and put them into .env folder.
   ```bash
   MONGO_URI="connection-URL/canteen"

   JWT_SECRET="enter random 21 characters"

   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   SECRET_STRIPE_KEY=
   ```
9. Navigate to frontend>>src>>components>>PaypalButton.js
   Change the stripePromise value
10. ```bash
    npm start
    ```

## Dependencies

The project utilizes the following dependencies:
### Frontend
- `react-router-dom`: For handling routing in React applications.
- `react-hook-form`: For form management in React.
- `react-toastify`: For displaying toast notifications in React applications.
- `axios`: For sending asynchronous HTTP requests to REST endpoints
- `stripe`: For handling the payments.
  
### Backend
- `node-multer`: Middleware for handling multipart/form-data in Node.js.
- `cloudinary-react`: React SDK for Cloudinary, a cloud-based image and video management service.
- `bcryptjs`: For hashing the passwords.
- `cors`: Allows handling cross-origin resource sharing.
- `dotenv`: Used to load environment variables from a .env file into Node.js applications.
- `express`: Framework for building web applications in Node.js.
- `Mongoose`: Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying interactions with MongoDB databases.


## Structure
The project structure is organized as follows:
### Frontend
- **src/components**: Contains reusable React components.
- **src/hooks**: Houses custom React hooks.
- **src/interceptors**: Contains interceptors for handling HTTP requests.
- **src/pages**: React components for different pages/routes.
- **src/services**: Contains service modules for interacting with external APIs.
- **src/App.js**: Entry point of the application, defines routing using react-router-dom.
- **src/AppRoutes.js**: Defines the routing configuration for different pages/routes.
- **public/index.html**: The main HTML file where React is mounted.

### Backend
- **src/config**: Contains configuration files for the backend application.
- **src/helpers**: Includes helper functions used throughout the backend codebase.
- **src/middleware**: Houses custom middleware for handling requests and responses.
- **src/models**: Defines Mongoose models for data schema and interaction with MongoDB.
- **src/routers**: Contains Express routers for defining API routes and endpoints.
- **server.js**: Entry point for the backend server, where the server is initialized and started.

