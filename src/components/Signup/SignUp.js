import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation,useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"

const SignUp = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const {loginGoogle,loginFacebook,signUpEmail}=useAuth()

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

    const getName=(e)=>{
      setName(e.target.value)
      
    }
    const getEmail=(e)=>{
      setEmail(e.target.value)
      
    }
    const getPassword=(e)=>{
      setPassword(e.target.value)
     
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      signUpEmail(email,password,name)
      
    }
    return (
        <div className="my-3 p-5 fw-bold">
            <h1 className="text-center text-danger fw-bold my-5  shade">Create Your Account</h1>
            <Form onSubmit={handleSubmit} className="w-25 mx-auto">
  <Form.Group className="mb-2" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={getName} type="text" placeholder="Enter Name" required />
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={getPassword} type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
   <p>Already have a account?<NavLink to="/login">login</NavLink></p>
  </Form.Group>
  
  <Button  className="d-block mx-auto" variant="primary" type="submit">
    Signup
  </Button>
</Form>
<div className="text-center mt-4">
<img onClick={handleGoogle} className="me-3" src="https://img.icons8.com/color/40/000000/google-logo.png"/>
<img onClick={handleFacebook} src="https://img.icons8.com/color/40/000000/facebook-new.png"/>
</div>
        </div>
    );
};
export default SignUp;