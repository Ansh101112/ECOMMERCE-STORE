import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryForms from '../../components/Layout/Forms/CategoryForms';

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/getall-category', {
                headers: {
                    'Cache-Control': 'no-cache', // Add cache-control header to prevent caching
                },
            });
            if (data.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try after sometime.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/category/create-category", {
                params: {
                    name,
                },
            });
            
            if (data?.success) {
                toast.success(`${data.name} is created successfully.`);
                getAllCategory();
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.");
        }
    };

    
    useEffect(() => {
        getAllCategory();
    }, []);

    return (
        <>
            <Layout>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-9'>
                        <h1>Manage Category</h1>
                        <div className='p-3 w-50'>
                            <CategoryForms handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
    {categories && categories.map((c) => (
        <tr key={c._id}>
            <td>{c.name}</td>
            <td><button className='btn btn-primary'>Edit</button></td>
        </tr>
    ))}
</tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default CreateCategory;
