import React from 'react'
import styled from "styled-components";

const ProductsBannerContainer = styled.div`
   width: 100%;
   height: 350px;
   background-color: ${({bgColor})=>bgColor};
`;
const ProductsBannerWrapper = styled.div`
    width: fit-content;
    height: 350px;
    margin: auto;

    
`;
const ProductsBannerImage = styled.img`
    height: 100%;
`;
// const ProductListWrapper = styled.div``;
// const ProductListWrapper = styled.div``;
// const ProductListWrapper = styled.div``;


function Banner({bannerImg, bgColor}) {
  return (
    <ProductsBannerContainer bgColor={bgColor}>
      <ProductsBannerWrapper>
        <ProductsBannerImage src={bannerImg} alt="" />
      </ProductsBannerWrapper>
    </ProductsBannerContainer>
  )
}

export default Banner
