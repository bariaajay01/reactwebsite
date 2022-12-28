import { useState } from "react";
import './Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login11() {
    const navigate= useNavigate();
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
//     useEffect(()=>{
//         if(!localStorage.getItem('token')){
//             navigate('/')
//         }
       
//   },[])
  
  console.log({ email, password })

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    }).then(result => {
        console.log(result.data)
        localStorage.setItem('token',result.data.token)
        //alert('success')
        navigate('/dashboard')   
      
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
      

  }

  return (

        <div className="login-page ">
       {/* <div className="login"> */}
    {/* <div className="form"> */}
    <div className="form">
    <h2>Login Form</h2>
      Email : <input value={email} onChange={handleEmail} type="text" /> <br />
      Password : <input value={password} onChange={handlePassword} type="password" /> <br />
      <button  onClick={handleApi} >Login</button>
    </div>
    </div>
  );
}

export default Login11;