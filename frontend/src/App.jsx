import { useState } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/pages/Home.jsx'
import Courses from './assets/components/pages/Courses.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
              <Route path='/' element={<h1>Home</h1>} />
              <Route path='/courses' element={<h1>Courses</h1>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
