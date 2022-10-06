import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUser]= useState([]);

  useEffect(() =>{
    loadUsers();
  }, []);

   const loadUsers= async () =>{
    const result= await axios.get("http://localhost:3003/users");
    setUser(result.data);
   };
  return (
    <div className='container'>
        <div className='py-4'>
            <h1>Home page</h1>
            <table class="table border shadow ">
  <thead class="table-dark">
    <tr>
      <th  scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {
      users.map((users,index)=> (
        <tr>
          <th scope='row'>{index+1}</th>
        <td>{users.name}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
        <Link className='btn btn-primary mr-2'>View</Link>
        <Link className='btn btn-outline-primary mr-2'>Edit</Link>
        <Link className='btn btn-danger'>Delete</Link>
        </tr>

      ))
    }
  </tbody>
</table>
        </div>

    </div>
  );
};

export default Home;