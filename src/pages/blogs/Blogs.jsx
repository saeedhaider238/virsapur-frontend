import React, {useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './sections/Hero'
import { useScroll } from 'framer-motion'
import ShowcasingWorkshopsImpacts from './sections/BlogCategories'
import BlogContentComponent from './sections/BlogContent'

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
            <BlogContentComponent/>
        </>
    )
}

export default Blogs
