import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Container = styled.div`
  width: 100%;
  display: flex;
  /* aspect-ratio: 16/8; */
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 1s ease;
  &:hover {
    background-color: #FFFFFF;
    transform: scale(1.1);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props.bgColor};
`;

const ImgContainer = styled.div`
  width: 800px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;


function Slider({ bannerList }) {
  const [slideIndex, setCurrentSlideIndex] = useState(0);
  let slideInterval;

  const SlideClickHandler = (direction) => {
    if (direction === "left") {
      setCurrentSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : bannerList.length - 1
      );
    } else {
      setCurrentSlideIndex(
        slideIndex < bannerList.length - 1 ? slideIndex + 1 : 0
      );
    }
  };

  const AutoSlide = () => {
    slideInterval = setInterval(() => {
      SlideClickHandler("right");
    }, 4000);
  };

  useEffect(() => {
    AutoSlide();
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => SlideClickHandler("left")}>
      <IoIosArrowBack size={30} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {bannerList.map((item) => (
          <Slide bgColor={item.bgColor}>
            <ImgContainer>
              <Image src={item.image} alt="" />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => SlideClickHandler("right")}>
        <IoIosArrowForward size={30} />
      </Arrow>
    </Container>
  );
}

export default Slider;
