var express = require('express');
var app = express();
 

app.get("/", function (req, res) {

    res.render("home.ejs");

    //res.send("Hi there you are in the root");

});

app.get("/r/:name", function (req, res) {
    var subreddit = req.params.name;
    console.log(req.params);

    res.send( "<h1>  WELCOME TO THE "+subreddit+"   Subreddit </h1> " );


});

app.get("/:print/:number",function(req,res)
{
    var name=req.params.print;
    var n=req.params.number;
    var send_name=" ";
    for( var i=0;i<n;i++)
    {
       send_name+= "My name is ";
        send_name+=name;
        send_name+='\n';

    }
    res.send( send_name);

});


app.get("r/:subtitle/comments/:id/:name", function (req, res) {
    var subreddit = req.params.name;
    console.log(req.params);
    res.send("WELCOME TO THE " + subreddit + " Subreddit");


});
app.get("*", function (req, res) {
    res.send("you are a star");

});
app.listen(3000, function () {
    console.log("hi h=there the express server is running ");
});
