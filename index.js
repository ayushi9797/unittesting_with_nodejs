const express = require("express");
const { connection } = require("./config/db");
const UserModel = require("./models/user.model");
const UserRouter = require("./router/user.router");




const app = express();

// ----------------------------- | swagger API |--------------------------->

// ! Importing Swagger module
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");


// swagger 


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node js unittesting  api doc",
            version: "1.0.0",
            description:
                "This is a  documentation where you can find API for CRUD operations ",
            contact: {
                name: "Ayushi",
                email: "soniayushi345@gmail.com"
            }

        },
        servers: [
            {
                url: "http://localhost:8080/"
            },
        ],
    },
    apis: ['./router/*.js']
}


const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));



//------------------------| home router  |-----------------------------------------------

app.get("/", async (req, res) => {
    try {
        res.status(200).send(` Home router`);

    } catch (error) {
        console.log(error.message);

    }

})

app.use(express.json());



// ----------------------------| User Routers |------------------------------------------------
app.use("/", UserRouter);



//----------------------------| server connection  |-----------------------------------------------

module.exports = app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`app listening on port ${process.env.port}`);
    } catch (error) {
        console.log({ error: `error in connections with the  port: ${error.message}` });
    }
});