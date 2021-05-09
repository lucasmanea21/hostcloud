import styled from 'styled-components'
import {HiDatabase} from 'react-icons/hi'

export const ServicesSection = styled.div`
    width: 100%;
`
export const ServicesWrapper = styled.div`
    margin-top: 140px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 140px 15vw 0 15vw;
`
export const ServicesText = styled.div``
export const ServicesTopline = styled.p`
    color: #00bcd4;
    font-size: 1.2rem;
    font-weight: 500;
`
export const ServicesTitle = styled.p`
    font-size: 2rem;
    margin:0;
    font-weight: 700;
`
export const ServicesP = styled.p`
    color: #6a6a6a;
`
export const ServicesCards = styled.div`
    display:flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 50px;
`

export const CardWrapper = styled.div`
    width: 31%;
    margin-top: 15px;

    @media screen and (max-width: 1000px) {
        width: 48%;
    }

    @media screen and (max-width: 670px) {
        width: 100%;
    }
`

export const Icon = styled(HiDatabase)`
`