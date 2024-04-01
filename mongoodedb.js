const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://tallurirahul787:qFHHX3rWDeRjz3hQ@cluster0.f84upct.mongodb.net/todoAppdb");
const UserSchema=new mongoose.Schema({
  name:String,
  username:String,
  password:String,
  todos:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"tododb"
  }
})
const todolistschema=new mongoose.Schema({
  title:String,
  description:String,
  datetime:String
})
const userdb=mongoose.model("Users",UserSchema);
const todoDB=mongoose.model("Todos",todolistschema);

module.exports={
  userdb,
  todoDB
}