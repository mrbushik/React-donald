import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  z-index: 100;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #299B01;
  color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  color: #ffffff;
  font-size: 14px;
  border: none;
  background: transparent;
`;

const User = styled.div`
display: flex;
align-items: center;
`;
const LogOut = styled.span`
font-size: 20px;
font-weight: 700px;
cursor: position;
`;

export const NavBar = ({authentication, login}) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Лого" />
      <H1>MrDonald&apos;s</H1>
    </Logo>
  { authentication ? 
  <User>
    <figure>
        <img src={signImg} alt={authentication.displayName} />
        <figcaption>{authentication.displayName}</figcaption>
    </figure>
      <LogOut title="Выйти">Х</LogOut>
  </User>
  :<Login onClick={login} >
        <img src={signImg} alt="Пользователь" />
        <p>Войти</p>
      </Login> }
  </NavBarStyled>
);
