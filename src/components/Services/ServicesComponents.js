import styled from 'styled-components'

export const ServicesWrapper = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 150px 0;
`

export const ServicesContent = styled.div ` 
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    width: 70%;
`
export const ServicesText = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
`
export const CardsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardWrapper = styled.div `
    max-width: 28%;
    padding: 15px 15px 15px 0;

    @media screen and (max-width: 1000px) {
        max-width: 40%;
    }

    @media screen and (max-width: 650px) {
        max-width: 100%;
    }
`