import React from 'react'
import FinalImg from '../../../../Resources/FinalImg.png'
import { ButtonRound } from '../../../BaseComponents/BaseButton/ButtonElements'
import { BaseLink, Container, Desc, Img, Title, Wrapper } from './FinalElements'

function Final() {
    return (
      <Container>
        <Wrapper>
          <Title>Learn new skills now.</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipiscing elit</Desc>
          <ButtonRound to="/" color={"#d19b3b"} hover={"#f14963"}>
            Get Started
          </ButtonRound>
          <Img src={FinalImg} />
          <BaseLink to="/">See our reviews</BaseLink>
        </Wrapper>
      </Container>
    );
}

export default Final
