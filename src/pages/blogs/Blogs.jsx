import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './sections/Hero'
import { useScroll } from 'framer-motion'
import ShowcasingWorkshopsImpacts from './sections/ShowcasingWorkshopsImpacts'

const Blogs = () => {
    const { scrollY } = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar scrollY={scrollY}/>
            <Hero />
            <ShowcasingWorkshopsImpacts />
        </>
    )
}

export default Blogs
