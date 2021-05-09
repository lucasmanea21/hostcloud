import styled from 'styled-components'

export const TeamSection = styled.div `
     width: 100%;
     padding: 50px 0;
`
export const ContentWrapper = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin: 0 !important;
`
export const TeamCards = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
`

export const CardWrapper = styled.div `
    display:flex;
    flex-direction: column;
    background-color: #f7f7f7;
    height: auto;
    box-sizing: border-box;
    margin: 15px;
    width: 20%;
    cursor: pointer;

    &:hover {
        img {
            opacity: 0.75;
            transition: 0.5s ease;
        }
    }

    @media screen and (max-width: 950px) {
        width: 35%;
    }
    @media screen and (max-width: 700px) {
        width: 80%;
    }
`
export const CardImage = styled.div `
    width: 100%;
    img {
        width: 100%;
    }
`
export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px
`
export const CardName = styled.div `
    font-size: 19px;
    font-weight: 500;
    padding: 5px;
`
export const CardRole = styled.div `
    color: #00bcd4;
`