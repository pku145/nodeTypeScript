import express from "express";
    app = express(),
    port = process.env.PORT  || 3000;

import mongoose from "mongoose";

import Task, { ITask } from './api/models/task.model';

import bodyParser from "body-parser";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let routes = require("./api/routes");
routes(app);

app.listen(port);
console.log("Server start on: " + port);

