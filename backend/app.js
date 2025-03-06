const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
const ErrorMiddleware= require("./middleware/error")
const path=require("path")

app.use(cors({
  origin:"*",
  credentials:true
}))

const userRoute = require('./controllers/userRoute');

const productRouter = require("./controllers/productRoute");



app.get("/test", async (req, res) => {
  res.send("hello.....");
});




app.use('/profile-photo', express.static(path.join(__dirname, 'uploads')));

app.use('/products-photo', express.static(path.join(__dirname, 'productUpload')));

app.use("/user",userRoute)
app.use("/product", productRouter);




app.use(ErrorMiddleware)



module.exports=app
