import React from 'react'
import BgImg from '../../../../Resources/Title.svg'
import {
  TitleContainer,
  TitleBg,
  TitleWrap,
  TitleText,
  DescText,
} from "./TitleElements";
import { ButtonRound } from '../../../BaseComponents/BaseButton/ButtonElements'

function Title() {
  return (
    <TitleContainer>
      <TitleBg style={{ backgroundImage: `url(${BgImg})` }}></TitleBg>
      <TitleWrap>
        <TitleText>Lorem ipsum dolor sit</TitleText>
        <DescText>Lorem ipsum dolor sit amet</DescText>
        <ButtonRound to="/" color={"#d19b3b"} hover={"#f14963"}>
          Start Now <i class="fas fa-arrow-right"></i>
        </ButtonRound>
      </TitleWrap>
    </TitleContainer>
  );
}

export default Title
