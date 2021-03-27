const express = require('express');
const mongoose = require('mongoose');

const routes = require('./Routers/index');

const host = "localhost";
const port = 8900;

const uri = "mongodb+srv://client:client2021@cluster0.40etm.mongodb.net/DB-1?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use('/',routes);


mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}).
    then(() => {
        app.listen(port, host, () => {
            console.log(`Server running at ${host}:${port}`);
        });
    }).
    catch((err) => {
        console.log(err);
    })
