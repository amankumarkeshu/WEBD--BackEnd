var express=require("express");
var  app=express();

app.get("/",function(req,res)
{   
    res.render("home.ejs");


        //res.send("Hello toot");

});

app.get("r/:subtitle/comments/:id/:name", function (req, res) {
    var subreddit = req.params.name;
    console.log(req.params);
    res.send("WELCOME TO THE " + subreddit + " Subreddit");


});

app.get("fallinlovewith/:name",function(res, req)
{
    var name=req.params.name;

    res.send("I fell in love with" +name);


});


app.listen(3000,function()
{
    console.log("the server haas started");

});