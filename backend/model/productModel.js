let mongoose = require("mongoose")

const ProductSchema =new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true,"Please enter the product name"]
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    images:{
        type:[String],
        require:true
    },
    tags:{
        type:[String],
        require:true
    },
    email:{
        type:String,
        require:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,'Please enter a valid email address']
    
    },
    


},
{
    timestamps:true,
}

);

module.exports = mongoose.model("Product",ProductSchema);