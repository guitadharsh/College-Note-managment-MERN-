import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home'
import Register from './pages/student/Register'
import Login from './pages/student/Login'
import TeacherRegister from './pages/teacher/TeacherRegister'
import TeacherLogin from './pages/teacher/TeacherLogin'
import Note from './pages/teacher/Note'
import Download from './pages/student/Download'
import { AuthContextProvider  } from './context/AuthContext';

function App() {
  return (
     <BrowserRouter>
     <AuthContextProvider>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentRegister" element={ <Register />} />
        <Route path="/studentLogin" element={ <Login /> } />
        <Route path="/teacherRegister" element={ <TeacherRegister />} />
        <Route path="/teacherLogin" element={ <TeacherLogin /> } />
        <Route path="/noteUpload" element ={< Note />} />
        <Route path="/noteDownload" element= {<Download />} />
      </Routes>
      </AuthContextProvider>
   </BrowserRouter> 
  );
}

export default App;
