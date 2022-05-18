import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import  {OrderTitle, TotalPrice, Total} from './Order';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';


const Modal = styled.div`
background-color: #fff;
width: 600px;
padding: 30px;
`;
const Text = styled.h3`
text-align: center;
margin-bottom: 30px;
`;
const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : "no topping"],
    choice: ['choice', item => item ? item : 'no choices'],
} 
const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData))
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    });
}
export const OrderConfirm = ({
    orders, setOrders, 
    authentication,
    setOpenOrderConfirm, 
    firebaseDatabase
})=>{
    const dataBase = firebaseDatabase()
    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

return(
    <Overlay>
    <Modal>
    <OrderTitle>{authentication.displayName}</OrderTitle>
    <Text>Осталось только подтвердить ваш заказ</Text>
    <Total>
        <span>Итого</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
    </Total>
    <ButtonCheckout
    onClick={()=>{
        sendOrder(dataBase, orders, authentication)
        setOrders([])
        setOpenOrderConfirm(false)
    }}
    ></ButtonCheckout>
    </Modal>
    </Overlay>
)
}