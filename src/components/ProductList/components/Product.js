import React from 'react'
import styled from "styled-components";

const ProductContainer = styled.div`
  aspect-ratio: 10/12;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 10px;
  border-radius:5px ;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0px 10px 0px #787777;
    -webkit-box-shadow: 0px 0px 10px 0px #787777;
    -moz-box-shadow: 0px 0px 10px 0px #787777;
  }
`;

const ProductWrapper = styled.div``;

const ProductImage = styled.img`
    width: 100%;
    border-radius:5px 5px 0 0;
`;
const ProductInfoContainer = styled.div`
   margin: 12px 20px;
`;

const ProductTitle = styled.div`
   font-weight: 600;
   margin: 10px 0;
   color: #474747;
`;
const ProductButtons = styled.div`
   display: flex;
   justify-content: space-between;
`;  
const ProductButton = styled.div`
   background-color: white;
   padding: none;
   font-size: 15px;
   font-weight:${(props)=>props.type === "SHOPNOW" && "700"};
   color:${(props)=>props.type === "NEWTODAY" && "red"} ; 
   cursor: pointer; 
`


function Product({data}) {
  return (
    <ProductContainer>
       <ProductWrapper>
          <ProductImage src={data.image}/>
          <ProductInfoContainer>
            <ProductTitle>{data.title}</ProductTitle>
            <ProductButtons>
                <ProductButton type="SHOPNOW">SHOP NOW</ProductButton>
            </ProductButtons>
          </ProductInfoContainer>
       </ProductWrapper>
    </ProductContainer>
  )
}

export default Product
