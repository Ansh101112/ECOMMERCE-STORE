import React from 'react'
import Layout from '../components/Layout/Layout'
import UserMenu from '../components/Layout/UserMenu'
import { useAuth } from '../context/auth'

const Profile = () => {
  
    const[auth,setAuth]=useAuth();

    return (
    <>
    <Layout title={'Your Profile'}>
        <div className='cotainer-fluid p-3 m-3'>
            <div className='row'>
            <div className='col-md-3'>
                <UserMenu></UserMenu>
            </div>
            <div className='col-md-9'>
                <h4>Your Profile</h4>
                <div className='card m-7 p-3'>
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
            </div>
            <div className='col-md-9'>
          
            </div>
        </div>
    </Layout>
</>
  )
}

export default Profile