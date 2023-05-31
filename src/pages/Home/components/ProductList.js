import React from 'react'
import styled from "styled-components";
import Product from './Product';

const ProductListContainer = styled.div`
  width: 100%;
  background-color: #EEEEEE;
  height: fit-content;
  margin-top: 2px;
  border-top: 1px solid #EEEEEE;
  padding-bottom: 20px;
`;

const ProductListTitle = styled.div`
   padding : 5px ;
   margin: 20px 0  15px 0;
   text-align: center;
   font-size: 23px;
   font-weight: 600;
`

const ProductListWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   margin: 0 10px;
   max-width: 1300px;
   margin:auto;
   color: #363636;
`;

function ProductList({PremiumBoutiques}) {
  return (
    <ProductListContainer>
        <ProductListTitle> PREMIUM BOUTIQUES </ProductListTitle>
        <ProductListWrapper>
            {PremiumBoutiques.map((data, index)=><Product key={index} data = {data}/>)}
        </ProductListWrapper>
    </ProductListContainer>
  )
}

export default ProductList
