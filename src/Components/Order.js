import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "./ButtonChekout";
import OrderListItem from "./OrderListItem";

const OrderStyled = styled.section`
position: fixed;
display: flex;
flex-direction: column;
top: 80px;
left: 0;
background: #fff;
min-width: 380px;
height: calc(100% - 80px);
box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
padding: 20px

`;
const OrderTitle = styled.h2`
text-align: center;
margin-bottom: 30px
`;
const OrderContent= styled.div`
flex-grow: 1;
& span:first-child{
    flex-grow: 1;
}
`;
const  OrderList = styled.ul``;
const Total = styled.div`
display: flex;
margin-bottom: 30px;
& span:last-child{
    flex-grow: 1;
}
`;
const TotalPrice = styled.span `
text-align: right;
min-width: 65px;
margin-left: 25px;
`;
const Order =()=>{
    return(
        <>
         <OrderStyled>
             <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
             <OrderContent>
                 <OrderList>
< OrderListItem></OrderListItem>
< OrderListItem > </OrderListItem>

                 </OrderList>
             </OrderContent>
             <Total>
                 <span>Итого</span>
                 <span>5</span>
                 <TotalPrice>850</TotalPrice>
             </Total>
             <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
        </>
    )
}

export default Order;