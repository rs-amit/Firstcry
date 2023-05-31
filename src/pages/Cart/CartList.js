import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Cart from "./Component/Cart";
import { useSelector } from "react-redux";

const CartContainer = styled.div`
  background-color: #F6F6F6;
  height: 100vh;
  padding: 40px;
`;
const CartWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding : 20px;
  background-color: white;
`;

const NoCartAlertBox = styled.div`
  color: #fa8043;
  font-size: 25px;
  font-weight: 600;
`


function CartList() {
  const cart = useSelector((state) => state.cart);
  const { products } = cart;

  return (
    <>
      <Header />
      <CartContainer>
        <CartWrapper> 
          {
            products.length ? products?.map((cartData, index) =>  <Cart key={index} data={cartData}/>) : (
              <NoCartAlertBox>Hey! No items in your cart</NoCartAlertBox>
            )
          }
        </CartWrapper>
      </CartContainer>
    </>
  );
}

export default CartList;
