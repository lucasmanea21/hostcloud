import styled from 'styled-components'
import {ImQuotesRight} from 'react-icons/im'

export const TestimonialsSection = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    width: 100%;
`
export const TestimonialsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
`

export const TestimonialWrapper = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const QuoteIconWrapper = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
`
export const QuoteIcon = styled.div`
    height: 60px;
    width: 60px;
    background: linear-gradient(145deg, rgb(114, 2, 187) 0%, rgb(50, 100, 245) 100%);
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 35px;
    text-align: center;

`
export const Icon = styled(ImQuotesRight)`
   height: 17px;
   width: 17px;
   color: #fff;
`
export const TestimonialDesc = styled.div`
    font-style: italic;
    text-align: center;
    color: #6a6a6a;
    margin-bottom: 25px;
`
export const TestimonalAuthor = styled.div`
    font-size: 19px;
    font-weight: 500;
    padding: 5px;
    text-align: center;
`
export const TestimonialOcupation = styled.div`
    font-size: 14px !important;
    color: #00bcd4;
    text-align: center;
    margin-bottom: 35px;
`