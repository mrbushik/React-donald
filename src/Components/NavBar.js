import React from "react";
import styled from "styled-components";
import logoImg from '../image/logo.svg';
const NavBarStyled = styled.header`
`;
const Logo = styled.div`
display: flex;
`;
const H1 = styled.h1``;
const ImgLogo = styled.img``;
 const NavBar = ()=>{
      return ( 
        <NavBarStyled>
        <Logo>
        <ImgLogo src={logoImg} alt='logo'/>
        <H1>MrDonald's</H1>
        </Logo>
        <button>войти</button>
    </NavBarStyled>
     )
   
}
export default NavBar;