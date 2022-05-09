import React from "react";
import styled from "styled-components";
import trashImg from "../image/trash.svg";

const OrderItemStyled = styled.li`
display: flex;
margin: 15px;
`;
const ItemName = styled.span`
flex-grow: 1`;
const ItemPrice = styled.span `
margin-left: 20px;
margin-right: 10px;
min-width: 65px;
text-align: right;
`;

const TrashButton = styled.button`
width: 24px;
height: 24px;
border-color: transparent;
background-color: transparent;
background-image: url(${trashImg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
curcor: pointer;
`;
const OrderListItem =()=>{
return (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>2</span>
        <ItemPrice>444</ItemPrice>
        < TrashButton/>
    </OrderItemStyled>
)
}
export default OrderListItem;