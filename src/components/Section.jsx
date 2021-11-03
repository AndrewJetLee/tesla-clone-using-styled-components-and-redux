import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  image,
  leftBtnText,
  rightBtnText,
  range,
  time,
  topSpeed,
  peakPower,
  interiorImg,
}) {
  return (
    <Wrap carImage={interiorImg ? interiorImg : image}>
      {interiorImg ? (
        <ItemText>
          <Fade bottom>
            <div>
              <h1>All-New Interior</h1>
            </div>
          </Fade>
        </ItemText>
      ) : (
        <>
          <ItemText>
            <Fade bottom>
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </Fade>
          </ItemText>
          <Fade bottom>
            {range ? (
              <CarInfo>
                <span>
                  <h3>396 mi</h3>
                  <p>Range(EPA est.)</p>
                </span>
                <span>
                  <h3>1.99s</h3>
                  <p>0-60mph*</p>
                </span>
                <span>
                  <h3>200mph</h3>
                  <p>Top Speed</p>
                </span>
                <span>
                  <h3>1,020hp</h3>
                  <p>Peak Power</p>
                </span>
                <RightButton>Order Now</RightButton>
              </CarInfo>
            ) : (
              <Buttons>
                <LeftButton>
                  {leftBtnText ? leftBtnText : "Custom order"}
                </LeftButton>
                {title !== "Accessories" ? (
                  <RightButton>
                    {rightBtnText ? rightBtnText : "Existing inventory"}
                  </RightButton>
                ) : null}
              </Buttons>
            )}
          </Fade>
          <DownArrow src="./images/down-arrow.svg"></DownArrow>
        </>
      )}
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ carImage }) => `url("/images/${carImage}")`};

  @media (max-width: 768px) {
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  margin-bottom: auto;
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const CarInfo = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  span {
    padding: 20px;

    h3 {
      color: white;
      font-size: 1.8rem;
      font-weight: 500;
    }
    p {
      padding: 5px; 
      color: white;
    }

    
  }

  div {
    margin-top: 25px; 
  }
`;
