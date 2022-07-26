import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './teacher.css'
import Navbar from '../../components/Navbar'

function TeacherLogin() {

  
  // const Registration = (e) => {
  //   e.preventDefault();
  //   console.log(email)
  //   console.log(password)

  //   axios.post("http://localhost:5000/api/teachers/login",{
  //     email,
  //     password
  //   }).then((response)=>{
  //     let res = response.data
  //     console.log(res)
  //   })

  // }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
    <Navbar />
    <div className="reg-container">
    <div className="reg-body">
        <div className="reg-left">
          <h3>Login</h3>
          <img src="https://img.freepik.com/premium-vector/woman-sitting-table-reading-document_1325-2489.jpg?w=1060" alt="" className='login-img' />
        </div>  

        <div className="reg-right">
        <Form>
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
          <Link to="/noteUpload"><button type="submit">Login</button></Link>
        </Form>
        <div>Create an Account <Link to="/teacherRegister"> Register here</Link></div>
        </div>
    </div>
  </div>
   </>
  )
}

export default TeacherLogin