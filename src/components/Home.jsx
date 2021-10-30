import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import * as carInfo from '../carInfo.json'

let cars = carInfo.default; 

function Home() {
    console.log(carInfo.default);
    return (
        <Container>
            {cars.map((car) => <Section 
            title={car.title}
            description={car.description}
            image={car.image}
            leftBtnText={car.leftBtnText}
            rightBtnText={car.rightBtnText}
            key={car.id}
        />)}
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`