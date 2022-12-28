import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import Login from './Login';
function Protected(props){
  const navigate = useNavigate();
  const {Component} = props;
 
  useEffect(()=>{
// const email = localStorage.getItem('email');
//  const password = localStorage.getItem('password');
   //console.log(email);
   //console.log(password);
   if(!localStorage.getItem('token')){
       navigate('/')
    }
   },[])

  ;
    return (
    <>
        <Component/>
    </>
    )
    }

export default Protected