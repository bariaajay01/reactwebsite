import axios from "axios";
import { useState } from "react";
import React from "react";


export default function Test() {
  const [post, setPost] = useState('');
  const getPost = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  then(res=>{
    console.log(res.data.content)
    setPost(res.data.content)
  }).catch(err => {
    console.log(err)
  })

  }
  return (
    <div>  
    <button onClick={getPost}>Get API Data</button>
      {post && <p>{post}</p>}
    </div>
  );
}