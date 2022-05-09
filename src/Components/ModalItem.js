import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from './ButtonChekout';
const Overlay = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 35px;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.5);
z-index: 20;
`;
const Modal = styled.div`
background-color: #fff;
width: 600px;
height: 600px;
`;
const Banner = styled.div`
width: 100%;
height: 200px;
background-image: url(${({img})=> img});
background-size: cover;
margin-bottom: 20px
`;
const ProductContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0 30px;
`;
const ProductInfo = styled.p`
font-family: Pacifico;
font-size: 30px;
`;
const ModalContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 310px);
  padding: 30px;
`;

const ModalItem =({openItem, setOpenItem})=>{
    function closeModal (e){
if(e.target.id === 'overlay'){
    setOpenItem(null)
}
    }
    if(!openItem) return null;
    return (
<Overlay id="overlay" onClick={closeModal}>
<Modal>
<Banner img={openItem.img}/>
<ModalContainer>
<ProductContainer>
  <ProductInfo>{openItem.name}</ProductInfo>  
  <ProductInfo>{openItem.price}₽</ProductInfo>  
</ProductContainer>
<ButtonCheckout>Добавить</ButtonCheckout>
</ModalContainer>


</Modal>
</Overlay>
    )
}

export default ModalItem;