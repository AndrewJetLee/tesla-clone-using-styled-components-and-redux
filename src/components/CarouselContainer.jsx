import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

let carouselItems = [
  {
    title: '17" Cinematic Display',
    description:
      "With 2200x1300 resolution, ultra bright, true colors and exceptional responsiveness, the new center display is the best screen to watch anywhere.",
    image: "./images/audio.jpg",
  },
];

function CarouselContainer() {
  return (
    <Container>
    </Container>
  );
}

export default CarouselContainer;

const Container = styled.div`
    height: 70vh;
  
`