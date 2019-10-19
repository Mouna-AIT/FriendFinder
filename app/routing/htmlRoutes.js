// DEPENDENCIES
//including the path package to get the correct file path for the html

var path = require("path");

// ROUTING
module.exports = function(app) {

    // In each of the below cases the user is shown an HTML page of content
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // If no matching route will default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};