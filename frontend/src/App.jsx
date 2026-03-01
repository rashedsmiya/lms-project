import { useState } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home.jsx";
import Courses from "./components/pages/Courses.jsx";
import Detail from "./components/pages/Detail.jsx";
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import MyCourses from './components/pages/account/MyCourses.jsx'
import MyLearning from '@components/pages/account/MyLearning.jsx'
import WatchCourse from './components/pages/account/WatchCourse.jsx'
import ChangePassword from './components/pages/account/ChangePassword.jsx'
import Dashboard from './components/pages/account/Dashboard.jsx'
import { Toaster } from 'react-hot-toast';
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
              <Route path='/account/courses-enrolled' element={<MyLearning/>} />
              <Route path='/account/watch-courses' element={<WatchCourse/>} />
              <Route path='/account/change-password' element={<ChangePassword/>} />
              <Route path='/account/dashboard' element={<Dashboard/>} />
        </Routes>
       </BrowserRouter>
       <Toaster position='top-right' reverseOrder={false} />
    </>
  )
}

export default App
