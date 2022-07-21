import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return (
      <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
        <h3>Student</h3>
        <Link to="/studentRegister">Register</Link><br />
        <Link to="/sudentLogin">Login</Link>
        <h3>Teacher</h3>
        <Link to="/teacherRegister">Register</Link><br />
        <Link to="/teacherLogin">Login</Link>
      </>
  )
}

export default Home