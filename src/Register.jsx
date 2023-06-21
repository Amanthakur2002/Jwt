import React, { useState } from 'react'
import  { NavLink , useNavigate}from 'react-router-dom'
import axios from 'axios'




import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

export default function Register() {
    const[values,setValues] = useState({
        name : "",
        email : "",
        password : ""
    })

    const navigate = useNavigate();
    
const handleSubmit = (event) => {
    event.preventDefault();
     axios.post('http://localhost:8081/register',values)
     .then(res =>{
      if(res.data.Status === "Success"){
          navigate('/login')
      } else {
        alert("error")
      }
     })
     .then(err => console.log(err));
}

  return (
    <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

<form onSubmit={handleSubmit}>
        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' id='form1' type='text' onChange={(e) => setValues({...values, name: e.target.value} )} className='w-100'/>
        </div>


        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' onChange={e=>setValues({...values, email: e.target.value})} type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' onChange={e=>setValues({...values, password: e.target.value})} type='password'/>
        </div>

        <MDBBtn id='register-button'>Register</MDBBtn>
        < NavLink to='/login' className='mb-6' size='lg'> login </NavLink>

        </form>
      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
  )
}
