import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import PackageContact from './PackageContact'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select-package" element={<PackageContact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
