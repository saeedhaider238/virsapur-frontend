import React from 'react'
import { Routes, Route } from "react-router";
import Home from './pages/home/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router