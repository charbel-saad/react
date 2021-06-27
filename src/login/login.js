import React, { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";
import './login.css';
import { useHistory } from "react-router";
import logo_login from './images/logo_login.gif';




function Login() {
   
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loginStatus, setLoginStatus] = useState("");
const history=useHistory();
Axios.defaults.withCredentials = true;

// const onLogin = () => {
//     Axios.post("http://localhost:4000/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//         if (response.data.message) {
//             setLoginStatus(response.data.message);
//             alert('wrong email or password  ')
//           } else {
//             // history.push('/dashboard');
//             localStorage.setItem('myUser',username)
//             if(localStorage.getItem('myUser')){
//               history.push('/dashboard')
//             }
//           }
//     }).catch((error)=>{
//         console.log(error);
//     });
    
//   };

//   useEffect(() => {
//     Axios.get("http://localhost:4000/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setLoginStatus(response.data.user[0].username);
        
//         // history.push('/dashbord')
       
//       }
//     });
//   }, []);

// const onLogin = () => {
//   console.log('hello');
//     Axios.post("/users/login/", {
//       email: email,
//       password: password,
//     }).then((response) => {
//      if(response.data.responseCode){
//       //  const parsed=JSON.stringify(response.data.data.name);
//       //  console.log(parsed);
//        localStorage.setItem('myUser',response.data.data.name)
//             if(localStorage.getItem('myUser')){
//               history.push('/dashboard')
//             }


//      }else{
//        alert("wrong email or password")
//      }
        
//     }).catch((error)=>{
//         console.log(error);
//     });
    
//   };

const onLogin=()=>{

console.log("hello");
axios.post("/users/login/",{
  email: email,
  password: password, })
.then((response)=>{
  if(response.data.responseCode){
    localStorage.setItem('myUser',response.data.data.name)
              if(localStorage.getItem('myUser')){
                history.push('/dashboard')
              }


  }else{
    alert('wrong email or password ');
  }
}).catch((error)=>{
  console.log(error);
})


}

    
        return(
            <div className="login_page">
            <div class="login-form">
            <img src={logo_login}  style={{'width':'550px','margin-top':'20px','margin-left':'20px','margin-bottom':'20px'}} />
            
            <input type="text" name="username" placeholder="Username" onChange={(e) => {
            setEmail(e.target.value);
            
          }} required />
                <input type="password" name="password" placeholder="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} required />
            <button className="login_btn" onClick={onLogin} >login</button>
            
        
        </div>
        </div>
        )
    }

export default Login;