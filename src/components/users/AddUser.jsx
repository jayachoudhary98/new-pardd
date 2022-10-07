import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import About from '../About';
import Home from '../Home';

const AddUser = () => {
  let history =useNavigate();
  const [users, setUsers] = useState({
    names: "",
    username: "",
    email: "",
    phone: "",
    website: ""

  });
  const [status, setStatus] = useState();

  const {names, username, email, phone, website}= users;
  const onChangeHandle=(e)=>{
//  const name=e.target.name;
//  const value=e.target.value;
 setUsers({
  ...users, [e.target.name]: e.target.value
 });
console(e.target.value);
  }
  const onSubmit= async (e)=>{
    e.prevantDefault();
    try {
    await axios.post("http://localhost:3003/users", users);
    setStatus(true);
  }
  catch (error) {
    console.log("Something is Wrong");
   }
  }
  if (status) {
    return <Home />
   }
  
  return (
    <div class="container">
      <form onSubmit={e =>onSubmit(e)}>
        <div class="mb-3 m-5">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" name='names' value={names} onChange={e=>onChangeHandle(e)}/>
        </div>
        <div class="m-5">
          <label class="form-label"> User Name</label>
          <input type="text" class="form-control" name='username' value={username} onChange={e=>onChangeHandle(e)}/>
        </div>

        <div class="m-5">
          <label class="form-label">Email</label>
          <input type="text" class="form-control" name='email' value={email} onChange={e=>onChangeHandle(e)}/>
        </div>
        <div class="m-5">
          <label class="form-label">Phone Number</label>
          <input type="text" class="form-control" name='phone' value={phone} onChange={e=>onChangeHandle(e)} />
        </div>
        <div class="m-5">
          <label class="form-label">Website names</label>
          <input type="text" class="form-control" name='website' value={website} onChange={e=>onChangeHandle(e)}/>
        </div>
        <div class=" m-5">
          <button type="submit" class="btn btn-primary" onSubmit={e =>onSubmit(e)}>Submit...</button>

        </div>
      </form>
    </div>
  )
}

export default AddUser
