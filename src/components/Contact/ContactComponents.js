import styled from 'styled-components'

export const ContactSection =  styled.div `
    display:flex;
    justify-content: center;
    flex-direction: column;
`
export const ContactWrapper = styled.div`
    display:flex;
    justify-content: center;
    width: 80%;
    padding: 100px 0;
    flex-wrap: wrap;
    
`

export const FormWrapper = styled.div`
   width: 50%;
   display:flex;
   flex-direction: column;
   /* z */
   align-items: center;
   text-align: left;
   
   input {
       margin: 10px;
        width: 60%;
        padding: 3px 20px 1px;
        height: 2.5rem;
   }
   #message {
       padding: 20px;
       height: 5rem;
   }
   @media screen and (max-width: 900px) {
        width: 100%;
    }
`
export const SendBtn = styled.div `
    background-color: #00bcd4;
    color: #fff;
    padding: 15px 20px !important;
    text-transform: uppercase;
    font-weight: 500;
`


export const ContentWrapper = styled.div`
    width: 50%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const TextWrapper = styled.div`
    border-bottom: 1px solid #6a6a6a;
    padding-bottom: 25px;
    margin-bottom: 25px;
`
export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
`
export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    /* width: 50%; */

    div {
        padding: 15px;
    }
`
export const CardText = styled.div`
    padding: 15px;
    font-weight: 500;
`