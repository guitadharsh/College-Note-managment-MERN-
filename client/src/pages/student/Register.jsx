import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import Navbar from '../../components/Navbar'
import './student.css'


function Register() {

  const Registration = (e) => {

    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)

  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <Navbar />
    <div className="reg-container">
      <div className="reg-body">
        <div className="reg-left">
          <h3>Register</h3>
          <img src="https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg?t=st=1658470034~exp=1658470634~hmac=6981b44a46db0331ebee581fc9ec40cd18e341ec3b46cc2f83d5171b2750e7de&w=1380" alt="" className='reg-img' />
        </div>

          <div className="reg-right">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                  </Form.Group>
                  <button type="submit" onClick={Registration}>Create Account</button>
              </Form>
             <div>Do you already have an account ? <Link to="/studentLogin"> Login here</Link></div>
          </div>
      </div>
    </div>
  </>
  )
}

export default Register