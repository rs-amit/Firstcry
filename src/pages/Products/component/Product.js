import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/CartRedux";

const ProductContainer = styled.div`
  aspect-ratio: 8/12;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0px 10px 0px #787777;
    -webkit-box-shadow: 0px 0px 10px 0px #787777;
    -moz-box-shadow: 0px 0px 10px 0px #787777;
  }
`;
const ProductWrapper = styled.div`
  padding: 15px;
`;
const ProductImgContainer = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 15px;
  margin: 10px 0 5px 0;
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 14px;
  color: #575656;
  margin-bottom: 10px;
`;
const Button = styled.button`
  width: 100%;
  padding: 7px;
  border: none;
  background-color: #ff7043;
  color: white;
  border-radius: 5px;
`;

function Product({ product }) {
  // const cart = useSelector((state)=>state.cart)
  const dispatch = useDispatch();

  const AddToCartHandler = async (product) => {
    console.log("product", product);
    const { ProductName, image, price, ...productData } = product;
    dispatch(
      addProduct({
        ...productData,
        name: ProductName,
        img: image,
        price: price,
      })
    );
  };

  return (
    <ProductContainer>
      <ProductWrapper>
        <ProductImgContainer>
          <Image src={product.image} alt="" />
        </ProductImgContainer>
        <ProductInfoContainer>
          <ProductName>{product.ProductName}</ProductName>
          <ProductPrice>Price ₹ {product.price}</ProductPrice>
        </ProductInfoContainer>
        <Button type="button" onClick={() => AddToCartHandler(product)}>
          ADD TO CART
        </Button>
      </ProductWrapper>
    </ProductContainer>
  );
}

export default Product;
