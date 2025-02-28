import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {

  return (
    <div className='h-screen w-full'>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
  )
}

export default App
