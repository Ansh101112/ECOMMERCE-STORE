import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth,setauth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/auth/login`, { email, password });
      if (res && res.data.success) {
        toast.success(res.data.message, { duration: 3000 });
        setauth({
            ...auth,
            user: res.data.user,
        })
        navigate(location.state || '/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!!');
    }
  };

  return (
    <>
      <Layout title={'LogIn-Ecommerce App'} />
      <div className="register">
        <h3>LogIn</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <NavLink to="/signup" className="form-check-label" htmlFor="exampleCheck1">
              Register Here
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

export default LogIn;