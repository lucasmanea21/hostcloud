import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    background-color: #f7f7f7;
    align-items: center;
    text-align: center;
    /* max-width: 33%; */
    box-sizing: border-box;
`
const CardContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 40px;
`
const CardImage = styled.div`
    background-color: #00bcd4;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100px;
    width: 100px;
    border-radius: 50%;

`

const IconWrapper = styled.div``

const CardTitle = styled.p`
    font-weight: 600;
    font-size: 19px;
`
const CardP = styled.p`
    color: #6a6a6a;
`

const Card = ({title,desc,icon}) => {
    return (
        <CardWrapper>
            <CardContent>
            <CardImage>
               <IconWrapper> {icon}</IconWrapper>
            </CardImage>
            <CardTitle>{title}</CardTitle>
            <CardP>{desc}</CardP>
            </CardContent>
        </CardWrapper>
    )
}

export default Card
