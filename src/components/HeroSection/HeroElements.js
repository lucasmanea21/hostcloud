import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroWrapper = styled.div `
    display: flex;
    width: 100%;
    background: url('https://templatemo.com/templates/templatemo_541_host_cloud/assets/images/heading-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 500px;
    height: 500px;
`
export const HeroContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
`
export const HomeLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 15px ;
    margin-right: 7px;
`
export const HeroTitle = styled.p `
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 0;
`
export const HeroLocation = styled.div `
    display: flex;
    margin: 0;
    p {
        font-size: 14px;
        margin: 0;
    }
`