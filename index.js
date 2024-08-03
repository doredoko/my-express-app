const fs=require('fs');
const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
const activities=require("./activities.json");
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/autumn",function(req,res){
   fs.writeFile(__dirname+"/data.txt",req.body.activity,
    function(){
      res.send("投稿完了");
    }
   );
});
app.post("/update",function(req,res){
  activities[0].activity=req.body.updatedActivities;
  res.send(activities);
});

app.listen(5000,function(){
  console.log("Listenning on localhost port 5000");
});