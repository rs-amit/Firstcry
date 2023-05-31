import React,{useState} from "react";
import styled from "styled-components";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2"
import { removeCart } from "../../../redux/CartRedux";
import { useDispatch } from "react-redux";

const CartContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #dedede;
  padding: 15px 0 15px 0;
`;
const CartDetails = styled.div`
  display: flex;
`;
const Image = styled.img`
  max-width: 100px;
  margin: 0 20px;
`;
const CartInfo = styled.div`
  margin: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductNameContainer = styled.div`
  margin: auto 0;
  flex: 1;
  max-width: 400px;
`;
const ProductName = styled.div`
  font-size: 20px;
  margin: auto 0;
  font-size: 15px;
`;
const ProductPrice = styled.div`
  margin: auto 0;
`;

const RemoveCart = styled.button`
  background-color: white;
  height: 40px;
  border: none;
  cursor: pointer;
`;

function Cart({ data }) {


  const dispatch = useDispatch();

  const DeleteCartHandler = (data) => {
    const { id } = data;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      allowOutsideClick: () => !Swal.isLoading(),
      preConfirm: () => {
        dispatch(removeCart({ id }));
      },
    });
  };


  return (
    <CartContainer>
      <CartDetails>
        <Image src={data?.img}alt=""/>
        <CartInfo>
          <ProductNameContainer>
            <ProductName>{data?.name}</ProductName>
          </ProductNameContainer>
          <ProductPrice> ₹ {data?.price} </ProductPrice>
          <RemoveCart onClick={() => DeleteCartHandler(data)}>
            <MdOutlineDelete size={22} color="red" />
          </RemoveCart>
        </CartInfo>
      </CartDetails>
    </CartContainer>
  );
}

export default Cart;

