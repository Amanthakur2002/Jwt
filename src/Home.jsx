import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('')
const [name, setName] = useState('')

  axios.defaults.withCredentials = true;


 useEffect(()=>{
    axios.get('http://localhost:8081')
     .then(res =>{
      if(res.data.Status === "Success"){
        setAuth(true)
        setName(res.data.name)
          
      } else {
       setAuth(false)
       setMessage(res.data.Error)
      }
     })
     .then(err => console.log(err));
  },[])
   
const handleDelete = () => {
  axios.get('http://localhost:8081/logout')
  .then(res => {
    window.location.reload(true);
  }).catch(err => console.log(err))
}

  return (
    <div className='container mt-4'>
      {
        auth ?
        <div>
            <h3>You are Authorized ======= {name}</h3>
            <button classname="btn btn-danger" onClick={handleDelete}>LogOut</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
         <button classname="btn btn-danger"> <Link to="/login">Login</Link> </button>
        </div>
      }
    </div>
  )
}