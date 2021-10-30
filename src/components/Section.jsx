import React from 'react'
import styled from 'styled-components'

function Section({ title, description, image, leftBtnText, rightBtnText }) {
    return (
        <Wrap carImage={image}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <LeftButton>
                    {leftBtnText ? leftBtnText : 'Custom order'}
                </LeftButton>
                {title !== 'Accessories' ? <RightButton>
                    {rightBtnText ? rightBtnText : 'Existing inventory'}
                </RightButton> : null}
            </Buttons>
            <DownArrow src="./images/down-arrow.svg"></DownArrow>
        </Wrap>
    )
}

export default Section


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
    background-image: ${({carImage}) => `url("/images/${carImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh; 
    margin-bottom: auto;
`

const Buttons = styled.div`
    display: flex; 
    margin-bottom: 30px; 

    @media (max-width: 768px) {
        flex-direction: column; 
    }
`

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
`

const RightButton = styled(LeftButton)`
    background-color: white; 
    opacity: 0.65; 
    color: black;
`
const DownArrow = styled.img`
    height: 40px; 
    animation: animateDown infinite 1.5s; 
    overflow-x: hidden; 
`