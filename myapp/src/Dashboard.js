//import { useEffect } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"
import Api from './Api';
//import Demo from './Demo';
//import Test from './test';

const Dashboard = () => {
  const navigate = useNavigate()
//   useEffect(()=>{
//     if(localStorage.getItem(null) ||
//     localStorage.getItem(null))
//       navigate('/')
//     })  
const logout = () => {
  localStorage.removeItem('token')
  navigate('/');
};


  return (
    <>
    <h1>Dashboard</h1>
    <div className="form">
      <Api/>
  <br />
    <button onClickCapture={logout} >Logout</button>
     
     </div>
     </>
  )
}

export default Dashboard