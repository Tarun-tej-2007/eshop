const express = require("express");
const cors=require ("cors")
const app = express();
app.use(express.json());
const ErrorMiddleware = require("./middelware/error")



app.use(cors({
  origin: "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]

})
)

const {userRoute} = require("./controllers/userRoute")

app.get("/test", async (req, res) => {
  res.send("hello.....");
});


app.use("/user",userRoute)



// app.post("/create",catchAsyncErrors(async(req,res,next)=>{
//   const{name,email,password}=req.body;
//   if(name&&email&&password){
//     const newUser=new UserModel({
//       name,email,password
//   })
//   await newUser.save();
//   res.status(200).send({msg:"Successful"})
//   }
// }))
app.use(ErrorMiddleware)

module.exports = { app };
