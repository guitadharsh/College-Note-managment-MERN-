import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home'
import Register from './pages/student/Register'
import Login from './pages/student/Login'
import TeacherRegister from './pages/teacher/TeacherRegister'
import TeacherLogin from './pages/teacher/TeacherLogin'
import Note from './pages/teacher/Note'

function App() {
  return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentRegister" element={ <Register />} />
        <Route path="/sudentLogin" element={ <Login /> } />
        <Route path="/teacherRegister" element={ <TeacherRegister />} />
        <Route path="/teacherLogin" element={ <TeacherLogin /> } />
        <Route path="/teacherNotes" element ={< Note/>} />
      </Routes>
     </BrowserRouter> 
  );
}

export default App;
