import styled from 'styled-components'

export const SectionWrapper = styled.div `
    display:flex;
    justify-content:center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 100px;
`
export const SectionContent = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-bottom: 50px;
    /* width: 100%; */
`
export const CardsSection = styled.div `
    margin: 0 20%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        margin: 0px;
    }
`

export const CardSection = styled.div `
    display:flex;
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`
