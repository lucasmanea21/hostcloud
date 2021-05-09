import React from 'react'
import * as Cp from './HeroElements'

const Hero = ({title}) => {
    return (
        <Cp.HeroWrapper>
            <Cp.HeroContent>
                <Cp.HeroTitle><p>{title}</p></Cp.HeroTitle>
                <Cp.HeroLocation><Cp.HomeLink to='/'> Home </Cp.HomeLink>  <p> / {title}</p></Cp.HeroLocation>
            </Cp.HeroContent>
        </Cp.HeroWrapper>
    )
}

export default Hero
