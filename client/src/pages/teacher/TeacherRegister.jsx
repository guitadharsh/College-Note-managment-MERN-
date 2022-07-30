import React from 'react'
import { Form, Alert } from 'react-bootstrap';
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './teacher.css'
import Navbar from '../../components/Navbar'
import {UserAuth } from "../../context/AuthContext"

function TeacherRegister() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()
  
  const Registration = async (e) => {

    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/teacherLogin')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    
  }
  return (
    <>
    <Navbar />
    <div className="reg-container">
    <div className="reg-body">
        <div className="reg-left">
          <h3>Register</h3>
          <img src="https://img.freepik.com/premium-vector/woman-sitting-table-reading-document_1325-2489.jpg?w=1060" alt="" className='login-img' />
        </div>  

        <div className="reg-right">
        <Form onSubmit ={Registration}>
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
         <button type="submit">Register</button>
        </Form>
        {error && <Alert vareint="danger">{error}</Alert>}  
        <div>Do you already have an account ? <Link to="/teacherLogin"> Login here</Link></div>
        </div>
    </div>
  </div>
   </>
  )
}

export default TeacherRegister