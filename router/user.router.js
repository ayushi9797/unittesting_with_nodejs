// ! -------------------------------| SWAGGER |-------------------------------------------------->

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */



// !------------------------------| Get Swagger API for home router |--------------------------------------->

/**
 * @swagger
 * /:
 *   get:
 *     summary:  GET method API for home router
 *     description: Use this API to check if the GET method is working or not.
 *     responses:
 *       "200":
 *         description: A success response indicating that the GET method is working.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Home router"
 */



//! ----------------------------------| for Post Router Swagger API  |-------------------------------------->

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Create a new user
 *     description: Use this API to create a new user with the provided user data in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *     responses:
 *       "200":
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *       "400":
 *         description: Bad Request or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 */




//! -----------------------------------------| Get router Swagger API | -------------------------------->

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Retrieve all users
 *     description: Use this API to retrieve details of all users from the database.
 *     responses:
 *       "200":
 *         description: A success response with the details of all users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                 data:
 *                   type: array
 *                   description: An array of user objects.
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The name of the user.
 *                       email:
 *                         type: string
 *                         description: The email address of the user.
 *       "400":
 *         description: Bad request or something went wrong
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message.
 */

//!------------------------------------| Get by Id Router Swagger API | ----------------------------------------------------->

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Get user details by ID
 *     description: Use this API to retrieve details of a user by providing the user ID in the URL.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve.
 *     responses:
 *       "200":
 *         description: User details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       "404":
 *         description: Not Found or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 */


//!----------------------------------------| Patch Route  Swagger API |-------------------------------------->


/**
 * @swagger
 * /api/task/{id}:
 *   patch:
 *     summary: Update user details by ID
 *     description: Use this API to update a user's details by providing the user ID in the URL.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to be updated.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the user.
 *               email:
 *                 type: string
 *                 description: The updated email address of the user.
 *               password:
 *                 type: string
 *                 description: The updated password of the user.
 *     responses:
 *       "200":
 *         description: User details updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       "404":
 *         description: Not Found or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 */


//!-----------------------------------------| delete Router  Swagger API |-------------------------------------->

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Use this API to delete a user's details by providing the user ID in the URL.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to be deleted.
 *     responses:
 *       "200":
 *         description: User details successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message.
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       "404":
 *         description: Not Found or something went wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: An error message.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 */


//!----------------------------------|  User Router |-------------------------------------------------->

const UserModel = require('../models/user.model');
const express = require('express');
const app = express();

const UserRouter = express.Router();
UserRouter.use(express.json());

//!-----------------------------| Post Router |--------------------------------------------------------->

UserRouter.post('/api/task', async (req, res) => {
    let user = req.body;
    console.log(user);

    try {
        // Validate the user data
        if (!user.name || !user.email || !user.password) {
            throw new Error('Invalid user data');
        }

        // Creating a new user with the model schema
        let data = new UserModel(user);
        // Save data in the MongoDB instance
        await data.save();
        console.log(data);
        console.log({ message: 'a new user created' });
        // If data is correct, send the correct status message
        res.status(200).send({ message: ':new user created ' });
    } catch (error) {
        console.log(error.message);
        // If details are not correct, send a failed message
        res.status(404).send({ message: 'something went wrong in creating all users' });
    }
});




// !---------------------------|  Get all users  |----------------------------------------------------->

UserRouter.get('/api/task', async (req, res) => {
    try {
        // finding the users data
        let data = await UserModel.find()

        // if data is correct, send the correct status message
        console.log({ message: `retrieve all the users`, data })
        res.status(200).send({ message: 'details of all the users', data });
    } catch (error) {
        console.log(error.message);
        // if details are not correct, send a failed message
        res.status(404).send({ message: 'something went wrong in retrieving all users' });
    }
});




// !--------------------------| Get Users by id   |--------------------------------------------------->

UserRouter.get('/api/task/:id', async (req, res) => {

    try {
        // finding the users data by id 
        let id = req.params.id

        let data = await UserModel.findById(id)

        console.log(data);
        // if data is correct the send the correct status message
        console.log({ message: `get user by id` })
        res.status(200).send({ message: `:${`get user by id`}`, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `error in getting users detils` })

    }

});




//! -------------------------|  Update the users details  |------------------------------------------>

UserRouter.patch('/api/task/:id', async (req, res) => {

    try {
        // taking the user details from user schema for updating in req.body
        let id = req.params.id;
        let user = req.body;
        console.log(id, user)
        //  finding by its id  and upadting the user details
        let data = await UserModel.findByIdAndUpdate(id, user)

        console.log(data);
        console.log({ message: `users details updated`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`users data updated `}`, user, data })


    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `error in updting the users details ` })

    }

});



//! -------------------------| Delete  user Router  |----------------------------------------------->

UserRouter.delete('/api/task/:id', async (req, res) => {

    try {
        // taking the users details from user schema for updating in req.body
        let id = req.params.id;

        console.log(id)
        //  finding by its id  and deleting the users details
        let data = await UserModel.findByIdAndDelete(id)

        console.log(data);
        console.log({ message: ` user details successfully deleted`, data })
        // if data is correct the send the correct status message
        res.status(200).send({ message: `:${`user data deleted `}`, data })

    } catch (error) {

        console.log(error.message);
        // if details are not correct send failed message
        res.status(404).send({ message: `something went wrong in deleting the users data` })

    }

});




module.exports = UserRouter;