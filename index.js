const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db/connection');
const config = require('./configs/config');
const routes = require('./routes/index');
const  app = express();
app.use(bodyParser.json());
app.use('/api/v1', routes);
const  PORT = config.PORT;

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server listening on: ${PORT}`);
        });
        await sequelize.authenticate();

        console.log('Database successfully connected!');
    }catch (error) {
        console.log('Unable to connect to the database!', error.message);
    }
};

start();
