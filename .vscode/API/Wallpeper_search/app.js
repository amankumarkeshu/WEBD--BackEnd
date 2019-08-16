var express = require("express");
var app = express();
var request = require("request");
const path = require('path');

app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    res.render("temp.ejs");
});
app.get("/results", function (req, res) {

    var query = (req.query.search);
    if (query == null)
        query = "ocean";
    var url = "https://pixabay.com/api/?key=13321809-7ccd4d4b7b2f16e9a1fe94d71&q=" + query + "&image_type=all&pretty=true&per_page=200"
    request(url, function (error, responce, body) {
        if (!error) {
            var data = JSON.parse(body);
            res.render("search.ejs", {
                data: data
            });
        }

    });
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Ho jaa Shuru!");
})