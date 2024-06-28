import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Checklist from './Pages/Checklist/Checklist'
import './index.css'
import Edit from './Pages/Edit/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/checklist" element={<Checklist />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
