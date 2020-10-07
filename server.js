//Dependencies
var express = require("express");

//creating express server
var app = express();

//set initial port for listener
var PORT = process.env.PORT || 5002;

//Sets Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});