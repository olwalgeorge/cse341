# My W01-Project API

This is a simple REST API for managing contacts, built with Node.js, Express, and MongoDB for course work in BYU CSE341 Web Services 

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

* **GET /api/contacts:** Get all contacts.
* **GET /api/contacts/:contactId:** Get a contact by ID.
* **POST /api/contacts:** Create a new contact.
* **PATCH /api/contacts/:contactId:** Update a contact by ID.
* **DELETE /api/contacts/:contactId:** Delete a contact by ID.

## Swagger Documentation

* The API documentation is available at `http://localhost:3000/api-docs`.

## Using the API with .rest files

* A `routes.rest` file is provided for quick testing with VS Code's REST Client extension.
* Open `contacts.rest` in VS Code and send requests by clicking "Send Request" above each request block.
* Example content of contacts.rest:

```rest
### Create a new contact
POST http://localhost:3000/api/contacts
Content-Type: application/json

{
    "contactname": "testcontact",
    "email": "test@example.com"
}

### Get all contacts
GET http://localhost:3000/api/contacts

### Get contact by ID
GET http://localhost:3000/api/contacts/your_contact_id

### Update contact by ID
PATCH http://localhost:3000/api/contacts/your_contact_id
Content-Type: application/json

{
    "contactname": "updatedcontact",
    "email": "updated@example.com"
}

### Delete contact by ID
DELETE http://localhost:3000/api/contacts/your_contact_id