import React from 'react'
import { ServicesP, ServicesTitle, ServicesTopline } from '../Home/ServicesSection/ServicesElements'
import * as Cp from './ServicesComponents'
import {servicesCards} from './data'
import Card from '../Card'


const Services = () => {
    const cards = servicesCards.map((item,index) => (
        <Cp.CardWrapper>
              <Card title={item.title} desc={item.desc} icon={item.icon}/>
        </Cp.CardWrapper>
      
    ))
    return (
        <Cp.ServicesWrapper>
            <Cp.ServicesContent>
            {/* <Cp.ServicesText> */}
                <ServicesTopline>Hosting Services</ServicesTopline>
                <ServicesTitle>Best Services We Provide</ServicesTitle>
                <ServicesP>Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.</ServicesP>
            {/* </Cp.ServicesText> */}
            <Cp.CardsWrapper>
               {cards} 
            </Cp.CardsWrapper>
            </Cp.ServicesContent>
            
            
        </Cp.ServicesWrapper>
    )
}

export default Services
