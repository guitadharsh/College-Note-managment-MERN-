import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

function TeacherLogin() {

  
  const Registration = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
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

     <Button variant="primary" type="submit" onClick={Registration}>
       Submit
     </Button>
   </Form>
   </>
  )
}

export default TeacherLogin