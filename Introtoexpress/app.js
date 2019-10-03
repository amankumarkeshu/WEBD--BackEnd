var express =require('express');
var app = express();
console.log("welcome");

app.get("/",function(req,res){

    res.send("Hi there you are in the root");
});
app.get("/bye",function(req,res)
{
    res.send("Goodbye");

});
app.get("/dogs",function(req,res)
{
    console.log("someone made a request");


    res.send("MEWO");

});

app.get("/r/:name", function (req, res) {
    var subreddit = req.params.name;
    console.log(req.params);
    res.send("WELCOME TO THE " + subreddit + " Subreddit");


});

app.get("r/:subtitle/comments/:id/:name", function (req,res)
{
    var subreddit=req.params.name;
    console.log(req.params);
    res.send("WELCOME TO THE " + subreddit + " Subreddit");

    
});
app.get("*", function(req,res)
{
    res.send("you are a star");

});
app.listen(3000,function(){
    console.log("hi h=there the express server is running ");
});
