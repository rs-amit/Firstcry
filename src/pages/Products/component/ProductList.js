import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductListContainer = styled.div`
   height: fit-content;
   background-color: #2F2F2F;
`;
const ProductListWrapper = styled.div`
   margin: 20px 0px;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   margin: 0 10px;
   max-width: 1500px;
   margin:auto;
   padding: 20px 0px;
   color: #363636;

`;
const ProductCategory = styled.div`
   padding:15px 55px;
   font-size: 14px;
   color: white;
   background-color: #373737;
`;



function ProductList({products}) {
    console.log(products)
  return (
    <ProductListContainer>
      <ProductCategory> Babies Day Out | Up to 24M </ProductCategory>
      <ProductListWrapper>
        {products?.map((productData)=> <Product product = {productData}/>)}
      </ProductListWrapper>
    </ProductListContainer>
  );
}

export default ProductList;
