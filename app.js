const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const cors=require("cors");
const approutes=require("./todoops")
app.use(bodyparser.json());
app.use(cors())
app.use("/user",approutes);

app.listen(3000,()=>{
  console.log("To do app is live")
})