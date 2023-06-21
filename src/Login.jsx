import React from 'react';
import { NavLink , useNavigate }from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

export default function Login() {

  const[values,setValues] = useState({
   
    email : "",
    password : ""
})

const navigate = useNavigate();

axios.defaults.withCredentials = true;

const handleSubmit = (event) => {
event.preventDefault();
 axios.post('http://localhost:8081/login',values)
 .then(res => {
  if(res.data.Status === "Success"){
      navigate('/');
  } else {
    alert(res.data.Error)
  }
 })
 .then(err => console.log(err));

}


  return (
    <div><MDBContainer fluid>

    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12'>

        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
          <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-white-50 mb-5">Please enter your login and password!</p>

            <MDBInput onChange={e=> setValues({...values,email : e.target.value})} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='email' id='formControlLg' type='email' size="lg"/>
            <MDBInput onChange={e => setValues({...values,password  : e.target.value})} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='password' id='formControlLg' type='password' size="lg"/>

            <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
 <form onSubmit={handleSubmit}>
            <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
              Login
            </MDBBtn>
</form>

            <div className='d-flex flex-row mt-3 mb-5'>
              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                <MDBIcon fab icon='google' size="lg"/>
              </MDBBtn>
            </div>

            <div>
              <p className="mb-0">Don't have an account? </p> 
              <NavLink to="/register" tag='a' color='blue' className='m-3' style={{ color: 'white' }}>Sign Up</NavLink>

            </div>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>
    </MDBRow>
    
  </MDBContainer></div>
  )
}
