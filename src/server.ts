let express = require("express"),
    app = express(),
    port = process.env.PORT  || 3000;

mongoose = require("mongoose");
Task = require("./api/models/listModel");
bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let routes = require("./api/routes/listRoutes");
routes(app);

app.listen(port);
console.log("Server start on: " + port);
