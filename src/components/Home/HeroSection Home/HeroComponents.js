import styled from 'styled-components'

export const SectionWrapper = styled.div`
    background-image: url('https://templatemo.com/templates/templatemo_541_host_cloud/assets/images/banner-bg.jpg');
    height: 800px;
    /* height: 100%; */
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`

export const SearchSection = styled.div `
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding-top: 300px;
    width: 100%;
    @media screen and (max-width: 991px) {
        
    }
`

export const SearchWrapper = styled.div `
    display: flex;


    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`
export const SearchTitle = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    color: #fff;

    @media screen and (max-width: 991px) {
        font-size: 1.5rem;
    }
`
export const SearchInput = styled.input`
    width: 40vw;
    height: 49px;
    padding: 0 15px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;

    @media screen and (max-width: 991px) {
       width: 70vw;
    }

    ::placeholder {
        color: #fff;
    }
`
export const SearchButton= styled.div`
    background-color: #00bcd4;
    color: #fff;
    margin-left: 15px;
    display:flex;
    justify-content: center;
    align-items: center; 
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 991px) {
       width: 50% !important;
       margin-top: 15px;
       padding:  15px 15px !important;
       font-size: 13px;
    }

`


export const DomainNames = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const DomainItem = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content:center;
    align-items: center;
    color: #fff;
    margin: 0 15px;
    font-weight: 500;
`

