import React from 'react'
import SkillL1 from "../../../../Resources/SkillL1.svg";
import SkillL2 from "../../../../Resources/SkillL2.svg";
import SkillL3 from "../../../../Resources/SkillL3.svg";
import { ButtonRound } from '../../../BaseComponents/BaseButton/ButtonElements';
import { SubTitle } from '../Infographics/InfographicsElements'
import {
  Container,
  ImgWrap,
  SkillWrap,
  TextWrap,
  Desc,
  SkillTextwrap,
  SkillTitle,
  Img,
} from "./SkillsElements";

function Skills() {
    return (
      <Container>
        <TextWrap>
          <SubTitle style={{ textAlign: "center" }}>
            Learn Professional skills with Swing.
          </SubTitle>
        </TextWrap>
        <SkillWrap>
          <SkillTextwrap left={true}>
            <SkillTitle left={true}>aisoj di poijp aslkd</SkillTitle>
            <Desc left={true}>ansdliasnh paoijsdpoas aisoj di poijp aslkd</Desc>
            <ButtonRound to="/" color={"#d19b3b"} hover={"#f14963"}>
              Start Now <i class="fas fa-arrow-right"></i>
            </ButtonRound>
          </SkillTextwrap>
          <ImgWrap>
            <Img src={SkillL1} alt="" />
          </ImgWrap>
        </SkillWrap>
        <SkillWrap>
          <ImgWrap>
            <Img src={SkillL2} alt="" />
          </ImgWrap>
          <SkillTextwrap>
            <SkillTitle>aisoj di poijp aslkd</SkillTitle>
            <Desc>ansdliasnh paoijsdpoas aisoj di poijp aslkd</Desc>
            <ButtonRound to="/" color={"#45ebd5"} hover={"#f14963"}>
              Start Now <i class="fas fa-arrow-right"></i>
            </ButtonRound>
          </SkillTextwrap>
        </SkillWrap>
        <SkillWrap>
          <SkillTextwrap left={true}>
            <SkillTitle left={true}>aisoj di poijp aslkd</SkillTitle>
            <Desc left={true}>ansdliasnh paoijsdpoas aisoj di poijp aslkd</Desc>
            <ButtonRound to="/" color={"#fe8050"} hover={"#f14963"}>
              Start Now <i class="fas fa-arrow-right"></i>
            </ButtonRound>
          </SkillTextwrap>
          <ImgWrap>
            <Img src={SkillL3} alt="" />
          </ImgWrap>
          {/* <ImgWrap radius={"77% 33% 49% 51% / 66% 43% 56% 45%"}>
            <img src={BgImg} alt="" />
          </ImgWrap> */}
        </SkillWrap>
      </Container>
    );
}

export default Skills
