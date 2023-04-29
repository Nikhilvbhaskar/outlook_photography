const express = require("express");
const app= express();

app.use(express.static(__dirname+"/public"));
app.get("/",(req,res)=>{
    res.render("outlook.ejs")
})

app.listen(process.env.PORT||3000);