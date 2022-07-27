import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import axios from 'axios'
import './student.css'
import Navbar from '../../components/Navbar'
// import Form from 'react-bootstrap/Form';

function Note() {

  const Download = (e) => {
    e.preventDefault();
    console.log(semester, subject, modules)

    axios.post("http://localhost:5000/api/students/noteDownload",{
      semester,
      subject,
      modules
    }).then(({response})=>{
      

      let res = response.data
      console.log(res)
    })
  }

  const [semester, setSemester] = useState('')
  const [subject, setSubject] = useState('')
  const [modules, setModules] = useState('')

  return (
    <>
    <Navbar />
    <div className="reg-container">
    <div className="reg-body">
        <div className="reg-left">
          <h3>Download Notes</h3>
          <img className='download-img' src="https://img.freepik.com/free-vector/download-concept-illustration_114360-3336.jpg?t=st=1658484371~exp=1658484971~hmac=34d321e7fff95aa26d50b7327351f867b5b6fd8e7e91cddb65f4f84d48577e28&w=740" alt="" />
        </div>  

        <div className="reg-right">
            <Form>
              <Form.Select aria-label="Default select example" className='mb-3' value={semester} onChange={(e)=>{setSemester(e.target.value)}}>
                <option>Choose Semester</option>
                <option value="1">1 sem</option>
                <option value="2">2 sem</option>
                <option value="3">3 sem</option>
                <option value="4">4 sem</option>
                <option value="5">5 sem</option>
                <option value="6">6 sem</option>
                <option value="7">7 sem</option>
                <option value="8">8 sem</option>
              </Form.Select>

             <Form.Group className="mb-3" controlId="subject">
               <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
             </Form.Group>


             <Form.Group className="mb-3" controlId="module">
               <Form.Control type="text" placeholder="Module" value={modules} onChange={(e)=>{setModules(e.target.value)}} />
             </Form.Group>

          <button type="submit" onClick={Download}>Download Notes</button>
        </Form>
        </div>
    </div>
  </div>
   </>
  )
}

export default Note