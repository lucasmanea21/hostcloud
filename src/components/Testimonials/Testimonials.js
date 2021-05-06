import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServicesTitle, ServicesTopline } from '../ServicesSection/ServicesElements';
import * as Cp from './TestimonialsElements'
import '../../App.css'
import {data} from './data'

const Testimonials = () => {
    const filledTestimonial= data.map((item,index) => (
        <Cp.TestimonialWrapper>
               <Cp.QuoteIconWrapper>
                <Cp.QuoteIcon> 
                    <Cp.Icon /> 
                </Cp.QuoteIcon>
                </Cp.QuoteIconWrapper>
                <Cp.TestimonialDesc>{item.desc} </Cp.TestimonialDesc>
                <Cp.TestimonalAuthor>{item.author}</Cp.TestimonalAuthor>
                <Cp.TestimonialOcupation> {item.ocupation}</Cp.TestimonialOcupation>
           </Cp.TestimonialWrapper>
    ))
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };

    return (
       <Cp.TestimonialsSection>
           <Cp.TestimonialsContent>
               <ServicesTopline>Testimonials</ServicesTopline>
               <ServicesTitle>What they say about us</ServicesTitle>
           </Cp.TestimonialsContent>
           <Slider {...settings}>
           {filledTestimonial}
           </Slider>
       </Cp.TestimonialsSection>
    )
}

export default Testimonials
