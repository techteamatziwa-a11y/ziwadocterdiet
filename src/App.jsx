import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import PackageContact from './PackageContact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select-package" element={<PackageContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
