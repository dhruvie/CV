//jshint esversion:6

const express=require('express');
const ejs = require("ejs");

const app= express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/resume",function(req,res){
  res.render("resume");
});

app.get("/portfolio",function(req,res){
  res.render("portfolio");
});

app.get("/practice",function(req,res){
  res.render("practice");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server is Running on Port 3000");
});
