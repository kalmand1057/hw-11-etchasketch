//Dependencies
var path = require("path");

//ROUTING
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__direname, "./public/notes.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__direname, "./public/index.html"));
    });
};