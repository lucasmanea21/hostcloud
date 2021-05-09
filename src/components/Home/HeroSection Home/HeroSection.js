import React from 'react'
import { BtnWrapper } from '../../Navbar/NavbarComponents'
import * as Cp from './HeroComponents'

const HeroSection = () => {
    return (
     <>
        <Cp.SectionWrapper>
            <Cp.SearchSection>
                <Cp.SearchTitle >
                Search your domain
                </Cp.SearchTitle>
                <Cp.SearchWrapper>
                 <Cp.SearchInput placeholder='Enter your domain here...'/>
                 <BtnWrapper> <Cp.SearchButton>Search Now</Cp.SearchButton></BtnWrapper>
                </Cp.SearchWrapper>
                <Cp.DomainNames>
                    <Cp.DomainItem>
                    <input type='checkbox' value='domain'/>
                    <p>.com ($10/yr)</p>
                    </Cp.DomainItem>

                    <Cp.DomainItem>
                    <input type='checkbox' value='domain'/>
                    <p>.net ($12/yr)</p>
                    </Cp.DomainItem>
                    <Cp.DomainItem>
                    <input type='checkbox' value='domain'/>
                    <p>.org ($8/yr)</p>
                    </Cp.DomainItem>
                    <Cp.DomainItem>
                    <input type='checkbox' value='domain'/>
                    <p>.in ($6/yr)</p>
                    </Cp.DomainItem>
                </Cp.DomainNames>
            </Cp.SearchSection>
        </Cp.SectionWrapper>
    
    </>
    )
}

export default HeroSection
