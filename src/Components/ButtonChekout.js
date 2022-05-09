import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  cursor: pointer;
  color: #ffffff;
  padding: 20px 80px;
  font-size: 21px;
  border-color: transparent;
  background-color: #299B01;
  transition-property: color, border-color, background-color;
  transition-duration: 0.3s;
  &:hover{
    color: #299B01;
    border-color: #299B01;
    background-color: #ffffff;
  }
  &:focus {
    outline-style: #299B01;
  }
`;