import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterWrapper = styled.div`
    background: url('https://templatemo.com/templates/templatemo_541_host_cloud/assets/images/footer-bg.jpg');
    background-size: 100% auto;
    display: flex;
`

export const FooterContent = styled.div `
    display:flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 50px 0
`
export const FooterColumns = styled.div `
    display:flex;
    color: #fff;
    width: 80%;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    border-bottom: 1px solid #a6a6a6;


    @media screen and (max-width: 800px) {
        width: 100%;
        flex-wrap: wrap;
    }
`
export const FooterCol = styled.div `
    width: 18%;
    padding: 10px 25px 40px 10px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    /* flex-wrap: wrap; */

    @media screen and (max-width: 800px) {
        width: 40%;
    }
`
export const ColTitle = styled.p `
    font-weight: 500;
    font-size: 19px;
    display: flex;
    align-items: center;

`
export const ColContent = styled(Link) `
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    padding: 5px 0
   
`
export const CopyrightWrapper = styled.div `
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    padding: 20px;
`