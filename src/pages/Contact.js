import React from 'react'
import ContactSection from '../components/Contact/ContactSection'
import Footer from '../components/Footer/Footer'
import Hero from '../components/HeroSection/Hero'
import Navbar from '../components/Navbar/Navbar'
import Testimonials from '../components/Testimonials/Testimonials'

const Contact = () => {
    return (
        <>
           <Navbar />
           <Hero title='Contact Us'/>
           <ContactSection />
           <Testimonials />
           <Footer />
        </>
    )
}

export default Contact
