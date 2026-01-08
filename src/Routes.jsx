import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Home from './pages/home/Home';
import Service from './pages/service/Service'
import Heritage from './pages/heritage/Heritage';
import Trails from './pages/trails/Trails';
import Trail from './pages/trail/Trail';
import Workshops from './pages/workshops/Workshops';
import Workshop from './pages/workshop/Workshop';
import WhyVirsapur from './pages/whyvirsapur/WhyVirsapur'
import Courses from './pages/courses/Courses.jsx'
import Course from './pages/course/Course.jsx';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/trails" element={<Trails />} />
      <Route path="/workshops" element={<Workshops />} />      
      <Route path="/courses" element={<Courses />} />
      <Route path="/why-virsapur" element={<WhyVirsapur />} />
      <Route path="/service/:servicePath" element={<Service />} />
      <Route path="/heritage/:heritagePath" element={<Heritage />} />
      <Route path='/trail/:trailPath' element={<Trail />} />
      <Route path='/workshop/:workshopPath' element={<Workshop />} />
      <Route path='/course/:coursePath' element={<Course />} />
    </Routes>
  )
}

export default Router