import React from 'react'
import {Form, Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'
import Navbar from '../../components/Navbar'
import './teacher.css'
import {useState} from 'react'
import {UserAuth } from "../../context/AuthContext"


function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/noteUpload')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <>
    <Navbar />
    <div className="reg-container">
      <div className="reg-body">
        <div className="reg-left">
          <h3>Register</h3>
          <img src="https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg?t=st=1658470034~exp=1658470634~hmac=6981b44a46db0331ebee581fc9ec40cd18e341ec3b46cc2f83d5171b2750e7de&w=1380" alt="" className='reg-img'/>
        </div>

          <div className="reg-right">
              <Form onSubmit = {handleSubmit}>
                {/* <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" ref={nameRef} />
                  </Form.Group> */}


                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <button type="submit">Login</button>
              </Form>
              {error && <Alert vareint="danger">{error}</Alert>}  
              <div>Create an Account <Link to="/teacherRegister"> Register here</Link></div>
          </div>
      </div>
    </div>
  </>
  )
}

export default TeacherLogin