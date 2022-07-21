import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home'
import Register from './pages/student/Register'
import Login from './pages/student/Login'
import TeacherRegister from './pages/teacher/TeacherRegister'
import TeacherLogin from './pages/teacher/TeacherLogin'

function App() {
  return (
    
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentRegister" element={ <Register />} />
        <Route path="/sudentLogin" element={ <Login /> } />
        <Route path="/teacherRegister" element={ <TeacherRegister />} />
        <Route path="/teacherLogin" element={ <TeacherLogin /> } />
      </Routes>
     </BrowserRouter>
    
  );
}

export default App;
