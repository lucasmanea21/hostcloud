import React from 'react'
import * as Cp from './CardElements'

const FeatureCard = ({title,desc}) => {
    return (
        <Cp.CardDiv>
        <Cp.CardWrapper>
            <Cp.ImageWrapper>
                <img src='https://templatemo.com/templates/templatemo_541_host_cloud/assets/images/feature-01.png' alt='feature'/>
            </Cp.ImageWrapper>
            <Cp.CardContent>
                <Cp.CardTitle>{title}</Cp.CardTitle>
                <Cp.CardDesc>{desc}</Cp.CardDesc>
            </Cp.CardContent>
        </Cp.CardWrapper>
        </Cp.CardDiv>
    )
}

export default FeatureCard
