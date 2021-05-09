import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AboutWrapper = styled.div `
    display:flex;
    justify-content: center;
    background-color: #f7f7f7;
`
export const ContentWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 150px 0;
    justify-content: center;
`
export const ImageWrapper = styled.div `
    display:flex;
    justify-content: center;
    padding: 0 15px;
    height: auto;
    img {
        @media screen and (max-width: 700px) {
            width: 90%;
        }
    }
`
export const TextWrapper = styled.div `
    padding: 0 15px;
    display:Flex;
    flex-direction: column;
    /* justify-content: center; */
    max-width: 40%;

    @media screen and (max-width: 1015px) {
            max-width: 80%;
        }

    @media screen and (max-width: 700px) {
            max-width: 100%;
        }
`
export const InfoWrapper = styled.div `
    padding-bottom: 25px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 25px;
`
export const FancyInfoWrapper = styled.div ``
export const InfoSelector = styled.div `
    display: flex;
    flex-direction: column;
    
    input {
        visibility: hidden;
    }
    label {
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
    }
    input:checked + label {
    color:  #00bcd4;
}
`

export const InputsWrapper = styled.div `
    display:flex;
    text-align: left;
    padding: 0;
    width: 100%;
    padding-bottom: 25px;
`
export const SelectorItem = styled(Link) `
    text-decoration: none;
    color: ${({index,id}) => (index=id ? '#00bcd4' : '#000')};
`
export const FancyP1 = styled.p `
    color: #6a6a6a;
    display: ${({value}) => (value ? 'flex' : 'none')};
`
export const FancyP2 = styled.p `
    color: #6a6a6a;
    display: ${({value}) => (value ? 'flex' : 'none')};
`
export const FancyP3= styled.p `
    color: #6a6a6a;
    display: ${({value}) => (value ? 'flex' : 'none')};
`