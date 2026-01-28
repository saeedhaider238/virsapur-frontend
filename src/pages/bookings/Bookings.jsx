import React, {useEffect} from 'react'
import Hero from './sections/Hero'
import Navbar from '../../Components/Navbar'
import { useScroll } from 'framer-motion'
import BookingCategories from './sections/BookingCategories'

const Bookings = () => {
    const { scrollY } = useScroll(); 

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

  return (
    // <div>
    //   <h1>Bookings</h1>
    // </div>
    <>
        <Navbar />
        <Hero />
        <BookingCategories />
    </>
  )
}

export default Bookings
