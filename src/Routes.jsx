import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from './pages/home/home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router