import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import * as carsObj from '../carInfo.json';
import CarouselContainer from './CarouselContainer'


let ModelSInfo = carsObj.default[0];

function ModelS() {
    return (
        <Container>
            <Section 
                title={ModelSInfo.title}
                description={ModelSInfo.description}
                image={ModelSInfo.image}
                key={ModelSInfo.id}
                range={ModelSInfo.range}
                time={ModelSInfo.time}
                topSpeed={ModelSInfo.topSpeed}
                peakPower={ModelSInfo.peakPower}
            />
            <Section 
                interiorImg={`new-interior.jpg`}
            />
            <CarouselContainer />
        </Container>
    )
}

export default ModelS

const Container = styled.div`
    display: flex; 
    flex-direction: column;
`
