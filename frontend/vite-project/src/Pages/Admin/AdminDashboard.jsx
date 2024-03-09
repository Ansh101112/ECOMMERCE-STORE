import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'
import Dashoard from '../../user/Dashoard'

const AdminDashboard = () => {
    const[auth,setAuth]=useAuth();
  return (
    <>
    <Layout title={"Dashoard-admin"}>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'><AdminMenu></AdminMenu></div>
                <div className='col-md-9'>
                    <div className='card w-75 p-3 m-2'>
                        <h4>Admin name: {auth?.user?.name}</h4>
                        <h4>Admin email: {auth?.user?.email}</h4>
                        <h4>Admin phone: {auth?.user?.phone}</h4>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default AdminDashboard