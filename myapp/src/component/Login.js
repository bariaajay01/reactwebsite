import './Login.css';
import React,{useState,useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login=()=>{ 
    const [email,setEmail]=useState(""); 
    const [emailerror,setEmailError] = useState("");
    const [passw,setPassw]=useState(""); 
    const [passwerror,setPasswError] = useState("");
	const[succmsg,setSuccmsg]= useState('')
    const[dataInput, setDataInput]=useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        let email1 =localStorage.setItem('email',email)
        let password =localStorage.setItem('password',passw)
        })    

    //  const [user, setUser] = useState() 
   // let login =localStorage.setItem('login','ajay')




   const submitThis= (e)=>{
        e.preventDefault();
const info={email:email,passw:passw}; 
		setDataInput([...dataInput,info]);
  //    console.log(info);
        setEmailError("");
        //setPasswError("");
          if(email==="ajay"){
       // setEmailError("Successful");
       navigate("/dashboard")   
      
    }
        else {
            //setEmailError("Userid is required");
            setEmailError("User is invalid ");
            //setPasswError("Password is invalid ");
        }
        
        setPasswError("");
          if(passw==="1234"){
         //   setPasswError("Successful");
         navigate("/dashboard")
         setSuccmsg("successfuly logged in")
        
        }
        else{
            setPasswError("Password is invalid ")
        }
        
    
    }
	return(
	<>
    
    <div className="login-page"></div>
    <div className="form">
    <div>
<h2>Login Form</h2>
		<form action="" onSubmit={submitThis}> 
           
            <div> 
				<label>Email</label>
				<input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/> 
			    {emailerror&&<div className="error-msg">{emailerror}</div>}
            </div> 
			<div> 
				<label>Password</label>
			<input type="current-password" name="passw" id="passw" value={passw} onChange={(e)=>setPassw(e.target.value)} placeholder="Password"/> 
			{passwerror&&<div className="error-msg">{passwerror}</div>}
            </div>  
			<button type="submit">Login</button>
        </form><br></br>
        {succmsg&& <div className="succ-msg">{succmsg}</div>}

        <div>
        <p>{email}</p>
        <p>{passw}</p>

        </div>
        
        {/* <div>
            {
            dataInput.map((curElem)=>{
            return(
                <div>
                <p>{curElem.email}</p>
                <p>{curElem.passw}</p>
                </div>
                )

        })
            }
        </div> */}

</div>
	</div>
    
    </> 
)} 

    
export default Login;