import styled   from "styled-components";
import {FaCheck} from 'react-icons/fa'


export const PlanDiv = styled.div `
    display:flex;
    width: 28% !important;
    padding: 0 15px;
    
    @media screen and (max-width: 1000px) {
        width: 40% !important;
    }

    @media screen and (max-width: 670px) {
        width: 100% !important;
    }
`
export const PlanWrapper = styled.div `
    width: 100% !important;
    box-shadow: rgba(0,0,0,0.1) 0 0 10px;
    background-color: #fff;
    color: #000;
    margin-bottom: 25px;

    /* @media screen and (max-width: 1000px) {
        width: 40% !important;
    }

    @media screen and (max-width: 670px) {
        width: 100% !important;
    } */
`
export const PlanContent = styled.div `
    display:flex;
    flex-direction: column;
    padding: 40px;
    text-align: center;

    
`
export const PlanTitle = styled.p `
    font-weight: 500;
`
export const PlanImage = styled.div `
    background: ${({primary}) => (primary ? '#00bcd4' : 'linear-gradient(145deg, rgb(114, 2, 187) 0%, rgb(50, 100, 245) 100%)')};
    justify-content: center;
    text-align: center;
    color: #fff;
    flex-direction: column;
    padding: 30px 0;
    font-weight: 500;
    display:flex
`
export const PlanPrice = styled.p `
    font-size: 2rem;
    margin: 0;
`
export const PlanPayment = styled.p `
    margin: 0;
`
export const PlanDesc = styled.div `
    padding: 25px 0px;
    border-bottom: 1px solid #f3f3f3;
    margin-bottom: 25px;
    color: #6a6a6a;
`
export const PlanFeatures = styled.div `
    text-align: left;
    align-items: center;
    margin-left: 0;
    padding: 0;
    color: #6a6a6a;
    
    ul {
        display:flex;
        flex-direction: column;
        justify-content: start;
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        margin-bottom: 20px;
    }
`
export const Icon = styled(FaCheck) `
    margin-right: 5px;
`
export const PlanBtn = styled.div ``
export const Button = styled.div `
    background: ${({primary}) => (primary ? '#00bcd4' : 'linear-gradient(145deg, rgb(114, 2, 187) 0%, rgb(50, 100, 245) 100%)')};
    width: 60% !important;
    padding: 10px !important;
    color: #fff;
    text-transform: uppercase;
    margin: 0;

    &:hover {
        background: ${({primary}) => (primary ? '#00a4b9' : 'linear-gradient(145deg, rgba(50,100,245,1) 0%, rgba(114,2,187,1) 100%)')};;
    }
`