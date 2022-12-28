import React from 'react'
import axios from "axios";
import { useState } from "react";
//import { useEffect } from 'react';
const Api = () => {
     const [post, setPost] = useState('');
    const getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>{
      setPost(res.data)
    }).catch(err => {
      console.log(err)
    })
     
    }   
  return (
    <div>  
    <button onClick={getPost}>Get API Data</button>
       <p>UserId: {post.userId}</p>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
    </div>
    
  )
}

export default Api;