const express=require("express")
const {todoDB}=require("./mongoodedb");
const router=express();
// router.post("/login",(req,res)=>{
//   req.
// })
router.get("/test",(req,res)=>{
  res.send("hello world");
})
router.post("/addtodo",async (req,res)=>{
  console.log("Hello")
  const title=req.headers.title;
  const description=req.headers.description;
  const date=req.headers.date;
  await todoDB.create({
    title,
    description,
    date
  })
  res.json({
    'msg':'Todo create Successfully'
  })

})

module.exports=router;