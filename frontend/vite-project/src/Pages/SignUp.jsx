import React from "react";
import Layout from "../components/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setphone] = useState("")
  const navigate = useNavigate();

  const handlesubmit= async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/auth/register`,{name,email,password,phone,address});
      if(res && res.data.success){
        toast.success(res.data.message, { autoClose: 3000 });
        toast.success("User registered successfully", { autoClose: 3000 });
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!")
    }
  }

  return (
    <>
      <Layout title={"SignUp-Ecommerce App"}></Layout>
      <div className="register">
        <h3>SignUp</h3>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              className="form-control"
              required
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
            placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              className="form-control"
              required
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              required
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
            placeholder="Phone Number"
              type="integer"
              value={phone}
              onChange={(e)=>{
                setphone(e.target.value)
              }}
              required
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <input
            placeholder="Address"
              type="text"
              value={address}
              onChange={(e)=>{
                setaddress(e.target.value)
              }}
              className="form-control"
              required
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <NavLink
              to="/login"
              className="form-check-label"
              htmlFor="exampleCheck1"
            >
              Login Here
            </NavLink>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
