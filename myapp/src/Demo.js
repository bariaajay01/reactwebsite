import axios from "axios";
import { useState } from "react";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/todos/1";

    const Demo = () => {
    const [post, setPost] = React.useState('');

    React.useEffect(() => { 
    axios.get(baseURL).then((response) => {    
    setPost(response.data);   
  });}, []);
    

    // if (!post) return null;
  
    return (
      <div>  
        <p>{post.id}</p>
      </div>
    );
}

export default Demo