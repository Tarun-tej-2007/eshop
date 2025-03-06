import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Login(props) { 
     const navigate=useNavigate()
    let [hide,sethide]=useState(true)
    const handlehide=()=>{
      sethide(!hide)
    }
    const [data,setData]=useState({email:"",password:""})
       
    const handleChange=(e)=>{
          setData({...data,[e.target.name]:e.target.value.trim()})
    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
         console.log(data,"////////////////")
      try {
        let response=await axios.post("http://localhost:2204/user/login",data)
        if(response.status==200){
          console.log("login successfull")
          navigate("/")
        }
      } catch (error) {
         console.log(error)
      }
        
    }


  return (
    <>
      <div className="border-2 w-[500px] mt-10 ml-20">
        <h1 className="text-3xl font-bold text-center">
          Login to your account
        </h1>
  {console.log(data)}
        <div className="w-7/10 h-85 m-auto mt-10 mb-10 shadow-lg">
          <label htmlFor="" className="block ml-10 mt-10">
            Email address
          </label>
          <input
            type="text"
            className="border-1 w-8/10 block m-auto h-8 rounded-md"
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="" className="block ml-10 mt-5 ">
            Password
          </label>
          <div className="flex  w-8/10 m-auto">
            <input
              type= {hide?"password":"text"}
              className="border-1 w-[88%] block m-auto h-8 rounded-md rounded-bl-md"
              onChange={handleChange}
              name="password"
              />

              {hide?<FaRegEye className="w-[12%] h-5 mt-1" onClick={handlehide}/>:<FaRegEyeSlash onClick={handlehide}/>}
            
          </div>

          <div className="flex m-auto mt-5  w-[80%]  justify-between ">
            <div className="flex  w-[48%]">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
                
            </div>
              
            <h6 className="font-semibold text-blue-700">Forgot password</h6>
          </div>

          <button
           
            type="submit"
            className=" w-8/10 block m-auto bg-blue-500 rounded-m mt-5 h-8 rounded-md"
            onClick={handleSubmit}
          >
            {" "}
            Login
          </button>
          <div className="flex mt-5 w-[80%]   ">
          <h6 onClick={props.x}  className="ml-9">Not have any account?</h6>
          <h6 onClick={props.x} className="ml-1 text-red-700">signup</h6>


          </div>

          

        </div>
      </div>
    </>
  );
}




export default Login;