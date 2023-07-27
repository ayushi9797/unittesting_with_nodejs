const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const UserModel = require('../models/user.model');


//!-----------------------------------|  Assertion  |------------------------------------------------>
chai.should();
chai.use(chaiHttp);
const expect = chai.expect;


//! ---------------------------------- | Home Router |-------------------------------------------->



// !------------------------------------|  GET request  | ------------------------------------------>

describe('GET /api/task', () => {

    //We can  Create some sample users to test the endpoint

    beforeEach(async () => {

        const sampleUsers = [
            { name: 'mayank', email: 'mayank11@gmail.com', password: '1234' },
            { name: 'ayushi', email: 'ayu111@gmail.com', password: '1234' },

        ];

        // Save the sample users to the database (or use the appropriate method)
        await UserModel.create(sampleUsers);

    });

    afterEach(async () => {
        await UserModel.deleteMany();
    });

    it('should get all users', async () => {

        // Send a GET request to the endpoint
        const res = await chai.request(server).get('/api/task');
        res.should.have.status(200);
        res.body.should.have.property('message').eql('details of all the users');
        res.body.should.have.property('data').to.be.an('array');


        // const numberOfUsers = res.body.data.length;
        // const expectedNumberOfUsers = 3; // Update this with the number of test users you added
        // numberOfUsers.should.be.eql(expectedNumberOfUsers);


    });


    //! Another test case for invalid url 

    it('<---------------|  It should not  get all users |------------------>', async () => {

        // Send a GET request to the endpoint
        const res = await chai.request(server).get('/api/taskss');
        res.should.have.status(404);

    });




});

//! ---------------------------------------| GET By Id |-------------------------------------------------------------->

describe('GET /api/task/:id', () => {
    it('<-----------------| should get a specific user by id |---------------->', async () => {
        // Create a new test user and save it in the database
        const testUser = { name: 'ayushi', email: 'ayu111@gmail.com', password: '1234' };
        const createdUser = await UserModel.create(testUser);

        console.log('Created User ID:', createdUser._id);

        // Send a GET request to the endpoint with the user's ID
        const res = await chai.request(server).get(`/api/task/${createdUser._id}`);
        console.log('Response Status Code:', res.status);

        res.body.data.should.have.property('name').eql(createdUser.name);
        res.body.data.should.have.property('email').eql(createdUser.email);
        res.body.should.be.a('object');


    });


    // ! another testcases for not valid status code 

    it('<----------------| should not get a specific user by id (404)  |--------------->', async () => {

        // Send a GET request to the endpoint with the non-existent user ID
        const res = await chai.request(server).get(`/api/tasks/:id`);
        console.log('Response Status Code:', res.status);
        res.should.have.status(404);

        res.body.should.not.have.property('message');
    });


});



//! ----------------------------------------| POST Router |------------------------------------------------------------>

describe('POST /api/task', () => {

    it('<--------------------| should create a new user |-------------->', async () => {
        // Define the test user data
        const testUser = { name: 'chiku', email: 'chiku12@example.com', password: '12345' };

        // Send a POST request to the endpoint with the test user data
        const res = await chai.request(server).post('/api/task').send(testUser);
        console.log('Response Status Code:', res.status);
        console.log('Response Body:', res.body);

        // Assert that the response status code is 200
        res.should.have.status(200);

        // Assert that the response body has the correct message
        res.body.should.have.property('message').eql(':new user created ');
        // Assert that the user data is saved correctly in the database
        const createdUser = await UserModel.findOne({ email: testUser.email });
        expect(createdUser).to.exist;
        expect(createdUser.name).to.eql(testUser.name);
        expect(createdUser.email).to.eql(testUser.email);


    });

});

//! for 404 creating a new user with error message

it('<-----------------------| should handle invalid user data (404)  |--------------->', async () => {
    // Define invalid test user data
    const invalidUser = { name: 'honey' };

    // Send a POST request to the endpoint with the invalid test user data
    const res = await chai.request(server).post('/api/tasks').send(invalidUser);
    console.log('Response Status Code:', res.status);
    console.log('Response Body:', res.body);

    // Assert that the response status code is 404 (Bad Request)
    res.should.have.status(404);


});




//! ----------------------------------------| PATCH  Router |----------------------------------------------------------->

describe('PATCH /api/task', () => {

    it('<-----------------------| should update user details |---------------->', async () => {
        // Create a new test user and save it in the database
        const testUser = { name: 'ayushi', email: 'ayu111@example.com', password: '1234' };
        const createdUser = await UserModel.create(testUser);

        // Update the user details
        const updatedUser = { name: 'ayushi soni', email: 'ayushisoni1234@example.com', password: '123456' };

        // Send a PATCH request to update the user details
        const res = await chai.request(server).patch(`/api/task/${createdUser._id}`).send(updatedUser);

        // Assert that the response status code is 200
        res.should.have.status(200);

        // Assert that the response body has the correct message
        res.body.should.have.property('message').eql(':users data updated ');

        // Assert that the updated user details are correctly saved in the database
        const updatedUserData = await UserModel.findById(createdUser._id);
        expect(updatedUserData.name).to.eql(updatedUser.name);
        expect(updatedUserData.email).to.eql(updatedUser.email);
    });

});

//! for Invalid Request in updateTask

it('should return 404 if request body is invalid', async () => {
    // Create a new test user and save it in the database
    const testUser = { name: 'ayushi', email: 'ayu111@example.com', password: '1234' };
    const createdUser = await UserModel.create(testUser);

    // Send a PATCH request with an invalid request body
    const res = await chai.request(server).patch(`/api/tasks/${createdUser._id}`).send({ invalidField: 'Invalid Field' });

    // Assert that the response status code is 404
    res.should.have.status(404);

    // Assert that the response body has the correct error message
    res.body.should.not.have.property('message')
});


//! ----------------------------------------| DELETE Router |----------------------------------------------------------->

describe('DELETE /api/task', () => {

    it('should delete a user', async () => {
        // Create a new test user and save it in the database
        const testUser = { name: 'barbie', email: 'barbie123@example.com', password: '123456789' };
        const createdUser = await UserModel.create(testUser);

        // Send a DELETE request to delete the user
        const res = await chai.request(server).delete(`/api/task/${createdUser._id}`);

        // Assert that the response status code is 200
        res.should.have.status(200);

        // Assert that the response body has the correct message
        res.body.should.have.property('message').eql(':user data deleted ');

        // Assert that the user is deleted from the database
        const deletedUser = await UserModel.findById(createdUser._id);
        expect(deletedUser).to.be.null;
    });

    //! for Invalid  Unsuccessful Deletion

    it('should return 404 if user does not exist', async () => {
        // Generate a random invalid user ID
        const invalidUserId = '64c17175d1d72cc84e4eacbf';

        // Send a DELETE request with invalid user ID to delete the user
        const res = await chai.request(server).delete(`/api/tasks/${invalidUserId}`);

        // Assert that the response status code is 404
        res.should.have.status(404);

        // Assert that the response body has the correct error message
        res.body.should.not.have.property('message')
    });



});


