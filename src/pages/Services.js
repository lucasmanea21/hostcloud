import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import Navbar from '../components/Navbar/Navbar'
import ServicesContainer from '../components/Services/ServicesContainer'

const Services = () => {
    return (
        <>
           <Navbar />
           <Hero title='Our Services'/>
           <ServicesContainer />
           <Footer />
        </>
    )
}

export default Services
