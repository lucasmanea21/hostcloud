import React,{useState, useEffect} from 'react'
import * as Cp from './NavbarComponents'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav= () => {
       (window.scrollY >= 120)? setScrollNav(true) : setScrollNav(false) 
   }

   useEffect(() => {
       window.addEventListener('scroll', changeNav)
   },[])

    console.log(scrollNav)

    return (
        <Cp.Nav scrollNav={scrollNav}>
            <Cp.NavbarWrapper>
                <Cp.LogoWrapper>
                       <Cp.Logo scrollNav={scrollNav} to='/'> <h2>HOST <em>CLOUD</em></h2> </Cp.Logo> 
                </Cp.LogoWrapper>
                
                <Cp.NavMenu>
                    <Cp.NavLink scrollNav={scrollNav} to='/'>Home</Cp.NavLink>
                    <Cp.NavLink scrollNav={scrollNav} to='/'>About Us</Cp.NavLink>
                    <Cp.NavLink scrollNav={scrollNav} to='/'>Our Services</Cp.NavLink>
                    <Cp.NavLink scrollNav={scrollNav} to='/'>Contact Us</Cp.NavLink>
                </Cp.NavMenu>
                <Cp.NavBtns>
                <Cp.BtnWrapper ><Cp.LogInBtn scrollNav={scrollNav}>Log in</Cp.LogInBtn></Cp.BtnWrapper>
                <Cp.BtnWrapper><Cp.SignUpBtn>Sign up</Cp.SignUpBtn></Cp.BtnWrapper>
                </Cp.NavBtns>
                <Cp.MenuIconWrap  onClick={() => setIsOpen(!isOpen)}>
                    <Cp.MenuIcon/>
                </Cp.MenuIconWrap>
                <Cp.DropDownMenu isOpen={isOpen}>
                    <Cp.MenuItem to='/'>Home</Cp.MenuItem>
                    <Cp.MenuItem to='/'>About Us</Cp.MenuItem>
                    <Cp.MenuItem to='/'>Our Services</Cp.MenuItem>
                    <Cp.MenuItem to='/'>Contact Us</Cp.MenuItem>
                </Cp.DropDownMenu>
            </Cp.NavbarWrapper>
        </Cp.Nav>
    )
}

export default Navbar
