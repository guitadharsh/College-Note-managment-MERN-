import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './home.css'

function Home() {
  return (
    <>
    <Navbar />
      <div className="home">
       <div className="home-container">
          <div className="home-left">
              <img src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?t=st=1658466254~exp=1658466854~hmac=57cc10a630a2e119ed6731cf5ea1a47c6cff925ec38ccaca71c600f0d0261c85&w=1060" alt="" />
              <p>Are You a teacher</p>
              <Link to="/teacherRegister"><button className='home-button'>Upload Notes</button></Link><br />

          </div>
          <div className="home-right">
              <img src="https://img.freepik.com/free-vector/study-abroad-concept-illustration_114360-7493.jpg?t=st=1658468854~exp=1658469454~hmac=d63670384d9dcea27ad73a7b0996a01d13b24d87f31a78d5ca6a325759cdb810&w=740" alt="" />
              <p>Are You a Student </p>
              <Link to="/studentRegister"><button className='home-button'>Download Notes</button></Link><br />

          </div>
       </div>
      </div>
    </>
  )
}

export default Home