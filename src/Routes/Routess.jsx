import React from 'react'
import {Routes, Route}  from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import AddUser from '../components/users/AddUser'
const Routess = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
           <Route exact path="/users/add" element={<AddUser/>}></Route>
            <Route element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default Routess;