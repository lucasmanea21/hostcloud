import React from 'react'
import AboutUsSection from '../components/About Us/AboutUsSection'
import { aboutData } from '../components/About Us/data'
import Team from '../components/About Us/Team'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import Navbar from '../components/Navbar/Navbar'
import Testimonials from '../components/Testimonials/Testimonials'


const About = () => {
    return (
        <>
           <Navbar />
           <Hero title='About Us'/>
           <AboutUsSection {...aboutData}/>
           <Team />
           <Testimonials />
           <Footer />
        </>
    )
}

export default About
