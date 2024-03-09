import React from 'react'
import Layout from '../components/Layout/Layout'
import UserMenu from '../components/Layout/UserMenu'
import { useAuth } from '../context/auth'

const Dashoard = () => {
  const[auth,setAuth]=useAuth();
  
  return (
    <>
    <Layout title={'User Dashoard'}></Layout>
        <div className='col-md-3'>
          <UserMenu></UserMenu>
        </div>
    </>
  )
}

export default Dashoard