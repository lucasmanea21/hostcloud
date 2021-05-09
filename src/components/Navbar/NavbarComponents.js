import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'

export const Nav = styled.div `
    
    display:flex;
    background-color: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
    height: 70px;
    justify-content:center;
    border-bottom: ${({scrollNav}) => (scrollNav ? '0' : '2px solid #5c56be')};
    z-index: 10;
    overflow: hidden;
    position: fixed;
    width: 100vw;
    transition: 0.5s ease;
    box-shadow: ${({scrollNav}) => (scrollNav ? 'rgba(0,0,0,0.1) 0 1px 10px' : '0')};
`
export const NavbarWrapper = styled.div `
    display:flex;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    padding: 0 10vw;
    background-color: transparent;
`
export const LogoWrapper= styled.div``

export const Logo = styled(Link) `
    text-decoration: none;
    color: ${({scrollNav}) => (scrollNav ? '#000' : '#fff')};
    display: flex;
    font-weight: 500;
    font-size: 13px;

    em {
        font-size: 16px;
    }
`




export const MenuIcon = styled(FiMenu)`
    color: #1a80c4;
    padding: 5px 15px;
    cursor: pointer;
` 

export const NavMenu= styled.div `
    display:flex;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 1000px) {
        display:none;
    }
`
export const NavLink= styled(Link) `
    padding: 0 20px;
    text-decoration: none;
    color: ${({scrollNav}) => (scrollNav ? '#000' : '#fff')};

    &:hover{
        color: #00bcd4;
    }

    
`
export const NavBtns= styled.div `
   display:flex; 
    text-transform: uppercase;
    font-size: 14px;

   @media screen and (max-width: 1000px) {
        justify-content: center;
        font-size: 11px;
    }
`

export const BtnWrapper = styled(Link) `
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 5px;

    div {
        width: auto;
        height: 100%;
        padding: 5px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        
    }
`

export const LogInBtn = styled.div`
    color: ${({scrollNav}) => (scrollNav ? '#00bcd4' : '#fff')};
    border: 3px solid;
    border-color: ${({scrollNav}) => (scrollNav ? '#00bcd4' : '#fff')};
    transition: 0.5s ease;

    &:hover {
        background-color: ${({scrollNav}) => (scrollNav ? '#00bcd4' : '#fff')};

        color: ${({scrollNav}) => (scrollNav ? '#fff' : '#00bcd4')}; 
    }
`

export const SignUpBtn = styled.div`
  transition: 0.5s ease;
  background-color: #00bcd4;  
  color: #fff;

  &:hover {
        background-color: #00a4b9;
    }
`
export const MenuIconWrap = styled.div`
    font-size: 1.5rem;
    display: none;
    background-color: #fff;

    @media screen and (max-width: 1000px) {
        display: flex;
    }
`
export const DropDownMenu = styled.div`
    position: fixed;
    display: none;
    justify-content: center;
    align-items: center;
    top:70px;
    left:0;
    flex-direction: column;
    width: 100vw;
    transition: 0.5s ease-in;
    background: #Fff;
    color: #000;

    @media screen and (max-width: 1000px) {
        display:${({isOpen}) => (isOpen ? 'flex' : 'none')};
    }

`
export const MenuItem = styled(Link)`
    padding: 15px 15px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #1e1e1e;
    border-bottom: 1px solid #f9f9f9;
`
