## NODE JS EXPRESS WITH MONGODB APPLYING UNITTESTCASES AND SWAGGER API DOCUMENTATION

## NODE JS

- A runtime environment that allows running JavaScript code outside of a web browser, enabling server-side applications.

## EXPRESS

- A minimalistic and flexible web application framework for Node.js, simplifying the process of building robust APIs and web applications.

## MONGODB

- A popular NoSQL database system that stores data in JSON-like documents, offering high scalability and flexibility.

## UNITTESTING

- A software testing method where individual units or components of a program are tested independently to ensure their correctness and functionality.

## SWAGGER API DOCUMENTATION

- API Documentation: A toolset for generating interactive and machine-readable API documentation, allowing developers to understand and consume APIs easily.

# Techs- stacks

| Node.js                                                                                                                         | Express.js                                                                                                                      | MongoDB                                                                                                                        | Swagger                                                                                       | Unit Testing                                                                                                                                                                                            | Chai                                                                                                                                                                                                | Mocha                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"> | <img width="75px" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"> | <img width="75px" src="https://developer.okta.com/assets-jekyll/blog/best-nodejs-testing-tools/the-best-testing-tools-for-nodejs-8de4715435efe8e9d74811baf4c7baaaeffdf6ae769c74bf54cf73a540ea51fb.jpg"> | <img width="75px" src="https://camo.githubusercontent.com/7ecbd4531436e4f20c1dba52a4fd4ac367cfcc20a2f62cfe7a10f32da306afc6/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67"> | <img width="75px" src="https://e7.pngegg.com/pngimages/21/493/png-clipart-mocha-node-js-javascript-software-testing-npm-github-logo-sign.png"> |

## Swagger documentation API

`http://localhost:8080/api-docs/`

![image](https://github.com/ayushi9797/unittesting_with_nodejs/assets/112810259/acfd9633-d1f7-4b58-bc48-41c875a7c81b)

## Postman collection

- `./postman_collection/unittesting_nodejs.postman.json`

## Database Mongodb collection

![image](https://github.com/ayushi9797/unittesting_with_nodejs/assets/112810259/3444a81c-af76-46fd-b5bf-eb1f77e98ce5)

# REQUIREMENTS

- User can register
- Retrieves a list of all user
- Retrieves a user with specific id
- Updates an existing user
- deletes an existing user

#### Creating Server

- It is not an inbuilt module of node, so we have to install it using `npm`
- Create a node project by `npm init -y` .
- Create a file named `index.js` .
- Initialise a node project and install `nodemon`
- Install `express`,`dotenv`,`mongoose`........

#### Running node.js locally

- install all dependencies `npm install`

#### To run mongodb server with Express Node

- `nodemon server`

# Unittesting

#### Folder File name

`./test/task.spec.js`

![image](https://github.com/ayushi9797/unittesting_with_nodejs/assets/112810259/eaba24df-03e0-43e4-899d-3d1f9320f30b)


## Set up Unit Testing

### Packages to be install

`npm install chai`,
`npm install mocha`,
`npm install chai-http`

### Set up tests

Before running the tests, make sure you have set up the project and installed the required dependencies. The API project should be running and accessible via the server variable in the test files.

### Test Cases

The test suite covers the following test cases:

1. GET /api/task
   Test the successful retrieval of all users.
   Test handling of an invalid URL (404).
2. GET /api/task/:id
   Test the successful retrieval of a specific user by ID.
   Test handling of an invalid user ID (404).
3. POST /api/task
   Test the successful creation of a new user.
   Test handling of invalid user data (404).
4. PATCH /api/task/:id
   Test the successful update of user details.
   Test handling of an invalid request body (404).
5. DELETE /api/task/:id
   Test the successful deletion of a user.
   Test handling of unsuccessful deletion with an invalid user ID (404).

#### Running the Tests

To run the tests, execute the following steps:

Ensure that the User Management API is running and accessible via the server variable in the test files.

Execute the test files using a test runner like Mocha and chai.

The test runner will execute the test cases defined in the test files and display the results.

## To check the testcases

`npm test`

#### Process using port 8080

` netstat -ano | findstr :8080`

#### Kill the process using the PID (replace '18308' with the actual PID)

`- taskkill /PID 18308 /F`

#### UserModel

```
{
    name: String,
    email: String,
    password: String
}

```

## API and Routes

# All routes

| METHOD    | ENDPOINT      | DESCRIPTION                                                                                | STATUS CODE |
| --------- | ------------- | ------------------------------------------------------------------------------------------ | ----------- |
| POST      | /api/task     | This endpoint should allow users to register and create.                                   | 200         |
|           |
| GET       | /api/task     | This endpoint should return a list of all available users.                                 | 200         |
| DELETE    | /api/task/:id | This endpoint should allow to users to delete details to the system.                       | 200         |
| PUT       | /api/task/:id | This endpoint should allow to update the details of a specific users identified by its ID. | 200         |
| GET BY ID | /api/task/:id | This endpoint should allow to users to get user by specific id.                            | 200         |

## APIS

### POST API

`http://localhost:8080/api/task`

#### Schema

```
{
    "name": "ayushi sonii",
    "email": "ayushi11@example.com",
    "password": "12345"
}
```

#### Response message

```
{
    "message": ":new user created "
}
```

### GET API

`http://localhost:8080/api/task`

#### Response Message

```
{
    "message": "details of all the users",
    "data": [
        {
            "_id": "64c27a5decdc583b7eff7ecf",
            "name": "ayushi",
            "email": "ayu111@gmail.com",
            "password": "1234",
            "__v": 0
        },
        {
            "_id": "64c27a5decdc583b7eff7ed2",
            "name": "chiku",
            "email": "chiku12@example.com",
            "password": "12345",
            "__v": 0
        },
        {
            "_id": "64c27eab4c8afd1337a38d1f",
            "name": "prathvi soni",
            "email": "prathvi12@gmail.com",
            "password": "1234",
            "__v": 0
        }
    ]
}
```

### GET BY ID API

`http://localhost:8080/api/task/64c280b04c8afd1337a38d26`

#### Response message

```
{
    "message": ":get user by id",
    "data": {
        "_id": "64c27a5decdc583b7eff7ed2",
        "name": "chiku",
        "email": "chiku12@example.com",
        "password": "12345",
        "__v": 0
    }
}
```

### PATCH API

`http://localhost:8080/api/task/64c280b04c8afd1337a38d26`

#### Response message

```
{
    "message": ":users data updated ",
    "data": {
        "_id": "64c280b04c8afd1337a38d26",
        "name": "ayushi sonii",
        "email": "ayushi11@example.com",
        "password": "12345",
        "__v": 0
    }
}
```

### DELETE API

`http://localhost:8080/api/task/64c280b04c8afd1337a38d26`

#### Response message

```

{
    "message": ":user data deleted ",
    "data": {
        "_id": "64c280b04c8afd1337a38d26",
        "name": "ayushi",
        "email": "ayu@example.com",
        "password": "12345",
        "__v": 0
    }
}
```
