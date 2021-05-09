import React from 'react'
import Card from '../../Card'
import * as Cp from './ServicesElements'
import {data} from './data'

const Services = () => {
    const dataIcon = <Cp.Icon/>
    const cardData = data.map((item,key) => (
        <Cp.CardWrapper>
        <Card title={item.title} 
        desc={item.desc}
        icon = {dataIcon}
        key={key}
        />
        </Cp.CardWrapper>
    ))
    console.log(cardData)
    return (
        <Cp.ServicesSection>
            <Cp.ServicesWrapper>
                <Cp.ServicesText>
                    <Cp.ServicesTopline>
                    Hosting Services
                    </Cp.ServicesTopline>
                    <Cp.ServicesTitle>Services we provide</Cp.ServicesTitle>
                    <Cp.ServicesP>Host Cloud is a professional Bootstrap 4 template by TemplateMo for your hosting company websites. There are 4 HTML pages included in this template. You can feel free to customize anything. Please share this template to your friends. Thank you.</Cp.ServicesP>
                </Cp.ServicesText>
                <Cp.ServicesCards>
                 {cardData}
                </Cp.ServicesCards>
            </Cp.ServicesWrapper>
        </Cp.ServicesSection>
    )
}

export default Services
