import React from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import './teacher.css';
import Navbar from '../../components/Navbar';
import { storageBucket } from "../../firebase"
import { ref, uploadBytesResumable } from "firebase/storage" 

function Note() {


  const upload = (e) => {
    e.preventDefault();

  }
  const [semester, setSemester] = useState('')
  const [subject, setSubject] = useState('')
  const [modules, setModules] = useState('')
  const [file, setFile] = useState('')
  return (
    <>
    <Navbar />
    <div className="reg-container">
    <div className="reg-body">
        <div className="reg-left">
          <h3>Upload Notes</h3>
          <img className='upload-img' src="https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4702.jpg?t=st=1658475291~exp=1658475891~hmac=0a7ebb3542c46fb1dbdb731df1c69b371a52fb0373c2983fc0f4b2ed3bb27405&w=740" alt="" />
        </div>  

        <div className="reg-right">
            <Form onSubmit = {upload}>
              <Form.Select enctype='multipart/form-data' aria-label="Default select example" className='mb-3' value={semester} onChange={(e)=>{setSemester(e.target.value)}}>
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

             
             <Form.Group className="mb-3" controlId="file">
            <Form.Control type="file" name="pdfFile" value={file} onChange={(e)=>{setFile(e.target.value)}} multiple />
            </Form.Group>
          <button type="submit">Upload Notes</button>
        </Form>
        </div>
    </div>
  </div>

   </>
  )
}

export default Note