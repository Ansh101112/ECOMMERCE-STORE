import React from 'react'
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Dashoard from './user/Dashoard';
import PageNotFound from './Pages/PageNotFound';
import Privateroute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CreateCategory from './Pages/Admin/CreateCategory.jsx';
import CreateProduct from './Pages/CreateProduct';
import Users from './Pages/Admin/Users';
import Orders from './user/Orders';
import Profile from './user/Profile';

const App = () => {
  return (
    <>
 <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path="/dashboard" element={<Privateroute></Privateroute>}>
  <Route path='user' element={<Dashoard></Dashoard>}></Route>
  <Route path='user/orders' element={<Orders></Orders>}></Route>
  <Route path='user/profile' element={<Profile></Profile>}></Route>
  </Route>
  <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
  <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
  <Route path="admin/create-category" element={<CreateCategory></CreateCategory>}></Route>
  <Route path='admin/create-product' element={<CreateProduct></CreateProduct>}></Route>
  <Route path='admin/users' element={<Users></Users>}></Route>
  </Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/contact-us' element={<Contact></Contact>}></Route>
  <Route path='/login' element={<LogIn></LogIn>}></Route>
  <Route path='/signup' element={<SignUp></SignUp>}></Route>
  <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
 </Routes>
    </>
  )
}

export default App;