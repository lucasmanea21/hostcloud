import React from 'react'
import { CardImage } from '../Card'
import { ServicesP, ServicesTitle, ServicesTopline } from '../Home/ServicesSection/ServicesElements'
import { BtnWrapper } from '../Navbar/NavbarComponents'
import * as Cp from './ContactComponents'
import {contactData} from './data'
import SimpleMap from './GoogleMap'

const ContactSection = () => {
    const icons = contactData.map((item,index) => (
        <Cp.CardWrapper>
             <CardImage>
                <span>{item.img}</span>
            </CardImage>
            <Cp.CardText>
                <p>{item.title}</p>
            </Cp.CardText>
        </Cp.CardWrapper>
    ))
    return (
        <Cp.ContactSection>
            <Cp.ContactWrapper>
            <Cp.FormWrapper>
                <input type='text' placeholder='Your name' />
                <input type='email' placeholder='Your email' />
                <input type='text' placeholder='Subject' />
                <input type='text' placeholder='Your message' id='message'/>
            <BtnWrapper><Cp.SendBtn>Send Message</Cp.SendBtn></BtnWrapper>
            </Cp.FormWrapper>
            <Cp.ContentWrapper>
                <Cp.TextWrapper>
                  <ServicesTopline>Contact Us</ServicesTopline>
                  <ServicesTitle>Let's keep in touch</ServicesTitle>
                  <ServicesP>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</ServicesP>       
                </Cp.TextWrapper>
                <Cp.IconsWrapper>
                    {icons}
                </Cp.IconsWrapper>
               
            </Cp.ContentWrapper> 
          
        </Cp.ContactWrapper>
          <SimpleMap />
        </Cp.ContactSection>
        
    )
}

export default ContactSection
