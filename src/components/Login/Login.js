import React, { useState } from 'react';
import { Button, Col,  Form, Image, Row, } from 'react-bootstrap';
import { NavLink,useLocation,useHistory  } from 'react-router-dom';
import "./Login.css"
import useAuth from "../../hooks/useAuth"

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {loginGoogle,loginFacebook,signInEmail}=useAuth()

  const location=useLocation()
  const history=useHistory()

  const locate=location.state?.from
    const handleGoogle=()=>{
      loginGoogle()
      .then((result) => {
        history.push(locate)
       })
    }
    const handleFacebook=()=>{
      loginFacebook()
      .then((result) => {
        history.push(locate)
      })
    }
    
    const getEmail=(e)=>{
      setEmail(e.target.value)
      
    }
    const getPassword=(e)=>{
      setPassword(e.target.value)
     
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      signInEmail(email,password)
      
    }
    const img=`https://i.ibb.co/jkV731L/30368654-removebg-preview.png`
    return (
        <div className="m-4 fw-bold" >
  <Row xs={1} lg={2} className="my-5">
    <Col><Image  fluid src={img}  rounded /></Col>
    <Col><div className="container my-5">
            <h1 className="text-center text-danger fw-bolder my-5  shade">Sign In</h1>
            <Form onSubmit={handleSubmit}  className="w-75 mx-auto">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
   <p>New user?<NavLink to="/signup">Create a account</NavLink></p>
  </Form.Group>
  
  <Button className="d-block mx-auto" variant="primary" type="submit">
  <img src="https://img.icons8.com/color/25/000000/login-rounded-right.png"/> Login
  </Button>
</Form>
<div className="text-center mt-4">
<img onClick={handleGoogle} className="me-3" src="https://img.icons8.com/color/40/000000/google-logo.png"/>
<img onClick={handleFacebook} src="https://img.icons8.com/color/40/000000/facebook-new.png"/>
</div>
        </div></Col>
  </Row>
  </div>
        
    );
};

export default Login;