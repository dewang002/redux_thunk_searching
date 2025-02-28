import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Members from './component/Members'

function App() {

  return (
    <div className='h-screen w-full'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/members' element={<Members />} />
    </Routes>
    </div>
  )
}

export default App
