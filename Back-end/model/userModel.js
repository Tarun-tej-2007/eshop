let mongoose = require("mongoose")

const addressSchema=mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    distrit:{
        type:String,
        required:true

    },
    pincode:{
        type:Number,
        required:true
    },
    area:{
        type:String
    }

})

const cartSchema=mongoose.Schema({
    
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity cannot be less than 1"],
          default: 1,
        },
      
})


const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user",
        enum:["user","seller","admin"]
    },
    address:{
        type:addressSchema
    },
    isActivated:{
        type:Boolean,
        default:false
    },
    cart: [cartSchema],

})


const UserModel =mongoose.model("user",userSchema)

module.exports=UserModel