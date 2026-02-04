import { useState } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/pages/Home.jsx'
import Courses from './assets/components/pages/Courses.jsx'
import Detail from './assets/components/pages/Detail.jsx'
import Login from './assets/components/pages/Login.jsx'
import Register from './assets/components/pages/Register.jsx'
import MyCourses from './assets/components/pages/MyCourses.jsx'
import CoursesEnrolled from './assets/components/pages/account/CoursesEnrolled.jsx'
import WatchCourse from './assets/components/pages/account/WatchCourse.jsx'
import ChangePassword from './assets/components/pages/account/ChangePassword.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/courses' element={<Courses/>} />
              <Route path='/detail' element={<Detail/>} />
              <Route path='/account/login' element={<Login/>} />
              <Route path='/account/register' element={<Register/>} />
              <Route path='/account/my-courses' element={<MyCourses/>} />
              <Route path='/account/courses-enrolled' element={<CoursesEnrolled/>} />
              <Route path='/account/watch-courses' element={<WatchCourse/>} />
              <Route path='/account/change-password' element={<ChangePassword/>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
