import React, {useEffect, useState} from 'react'
import {data} from './data'
import * as Cp from './TrustedSectionElements'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TrustedSection = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", updateSize)
        if(width < 800) {
            settings.slidesToShow = 2
        } else if (width < 500) {
            settings.slidesToShow = 1
        } else {
            settings.slidesToShow = 4
        }

    })

    const updateSize = () => {
        setWidth([window.innerWidth])
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 0,
        slidesToScroll: 0,
        arrows: false
      };

    if( width < 500) {
            settings.slidesToShow = 1
            settings.slidesToScroll = 1
        } else if (width < 800) {
            settings.slidesToShow = 2
            settings.slidesToScroll = 2
        } else {
            settings.slidesToShow = 4
            settings.slidesToScroll = 4
        }

    console.log(width)
    console.log(settings.slidesToShow)

    const trustedCompanies = data.map((item,index) => (
       <Cp.TrustedCompanies>
            <Cp.TrustedCompany>
              <img src={item.src} alt='company' />  
            </Cp.TrustedCompany>
       </Cp.TrustedCompanies>
           
            
    ))
    return (
        <Cp.SectionWrapper>
            <Cp.TrustedTitle>
            Trusted by 1,250+ happy customers worldwide
            </Cp.TrustedTitle>
           <Slider {...settings}>
                
                    {trustedCompanies} 
                {/* </Cp.TrustedCompanies> */}
            </Slider>
            
            
        </Cp.SectionWrapper>
    )
}

export default TrustedSection
