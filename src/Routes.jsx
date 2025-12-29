import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from './pages/home/Home';
import Service from './pages/service/Service'
import Heritage from './pages/heritage/Heritage';
import Trails from './pages/trails/Trails';
import Trail from './pages/trail/Trail'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/trails" element={<Trails />} />
      <Route path="/service/:servicePath" element={<Service />} />
      <Route path="/heritage/:heritagePath" element={<Heritage />} />
      <Route path='/trail/:trailPath' element={<Trail />} />
    </Routes>
  )
}

export default Router