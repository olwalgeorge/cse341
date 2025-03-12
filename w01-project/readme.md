# My W01-Project API

This is a simple REST API for managing users, built with Node.js, Express, and MongoDB for course work in BYU CSE341 Web Services 

## Prerequisites

* Node.js (>= 14)
* npm or yarn
* MongoDB

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure environment variables:**

    * Create a `.env` file in the root directory.
    * Add the following environment variable:

        ```
        MONGODB_URI=mongodb://localhost:27017/myproject1
        PORT=3000 # Optional, defaults to 3000
        ```

    * Replace `mongodb://localhost:27017/myproject1` with your MongoDB connection string.

4.  **Start the server:**

    ```bash
    node server.js  
    ```

    The server will run on `http://localhost:3000`.

## API Endpoints

* **GET /api/users:** Get all users.
* **GET /api/users/:userId:** Get a user by ID.
* **POST /api/users:** Create a new user.
* **PATCH /api/users/:userId:** Update a user by ID.
* **DELETE /api/users/:userId:** Delete a user by ID.

## Swagger Documentation

* The API documentation is available at `http://localhost:3000/api-docs`.

## Using the API with .rest files

* A `routes.rest` file is provided for quick testing with VS Code's REST Client extension.
* Open `users.rest` in VS Code and send requests by clicking "Send Request" above each request block.
* Example content of users.rest:

```rest
### Create a new user
POST http://localhost:3000/api/users
Content-Type: application/json

{
    "username": "testUser",
    "email": "test@example.com"
}

### Get all users
GET http://localhost:3000/api/users

### Get user by ID
GET http://localhost:3000/api/users/your_user_id

### Update user by ID
PATCH http://localhost:3000/api/users/your_user_id
Content-Type: application/json

{
    "username": "updatedUser",
    "email": "updated@example.com"
}

### Delete user by ID
DELETE http://localhost:3000/api/users/your_user_id