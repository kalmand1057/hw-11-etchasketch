//LOAD DATA
var db = require("../Develop/db/db");

//ROUTING
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        db.push(req.body);
        res.json(req.body);
    });

    // app.delete("/api/notes/:id", function(req, res) {
    //     //figure out id for notes
    // });
};