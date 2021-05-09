import React from 'react'
import {teamData } from './data'
import { ServicesP, ServicesTitle, ServicesTopline } from '../Home/ServicesSection/ServicesElements'
import * as Cp from './TeamComponents'

const Team = () => {

   
    const TeamCard = ({img, name, role}) => 
    <Cp.CardWrapper>
        <Cp.CardImage> <img src={img} alt='team-member'/></Cp.CardImage>
        <Cp.CardContent>
            <Cp.CardName>{name}</Cp.CardName>
            <Cp.CardRole>{role}</Cp.CardRole>
        </Cp.CardContent>
    </Cp.CardWrapper> 

    const card = teamData.map((item,index) => (
        <TeamCard name={item.name} role={item.role} img={item.img}/>
    ))
    return (
        <Cp.TeamSection>
            <Cp.ContentWrapper>
                <ServicesTopline>Our Team</ServicesTopline>
                <ServicesTitle>Meet the greatest people</ServicesTitle>
                <ServicesP>Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.</ServicesP>
                <Cp.TeamCards>
                   {card}
                </Cp.TeamCards>
            </Cp.ContentWrapper>
        </Cp.TeamSection>
    )
}

export default Team
