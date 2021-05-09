import React from 'react'
import { ServicesTitle, ServicesTopline } from '../ServicesSection/ServicesElements'
import FeatureCard from './Card/FeatureCard'
import * as Cp from './FeaturesElements'
import {data} from './Data'

const FeaturesSection = () => {
    const cardsData = data.map((item,key) => (
           <Cp.CardSection>
            <FeatureCard title={item.title} desc={item.desc} key={item.key} />
           </Cp.CardSection> 
    )) 
    return (
        <Cp.SectionWrapper>
            <Cp.SectionContent>
                <ServicesTopline>Best Quality for you</ServicesTopline>
                <ServicesTitle>Cloud Features</ServicesTitle>
            </Cp.SectionContent>
             <Cp.CardsSection >
            {cardsData}
            </Cp.CardsSection>
        </Cp.SectionWrapper>
    )
}

export default FeaturesSection
