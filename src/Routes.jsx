import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from './pages/home/Home';
import Service from './pages/service/Service'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/service/:servicePath" element={<Service />} />
    </Routes>
  )
}

export default Router