import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 2000px;
  position: relative;
  z-index: 1;
  background: #fff;
  /* border: solid 1px red; */
  @media screen and (max-width: 960px) {
    height: 1600px;
  }
`;

export const TextWrap = styled.div`
  width: 50%;
  margin: 5%;
  @media screen and (max-width: 960px) {
    margin: 15%;
  }
`;

export const SkillWrap = styled.div`
  height: 30%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 5%;
  @media screen and (max-width: 960px) {
    height: 20%;
    width: 90%;
    height: 40%;
  }
  /* border: solid 1px red; */
`;

export const SkillTextwrap = styled.div`
  /* border: solid 1px red; */
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${({ left }) => (left ? "start" : "end")};
  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;

export const SkillTitle = styled.h3`
  color: #182434;
  font-size: 48px;
  font-weight: bold;
  text-align: ${({left})=>left?'start':'end'}
`;

export const Desc = styled.p`
  color: #182434;
  font-size: 18px;
  text-align: ${({ left }) => (left ? "start" : "end")};
`;

export const ImgWrap = styled.div`
  border-radius: ${({ radius }) => radius};
  overflow: hidden;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    height: 300px;
    width: 300px;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: scale-down;
`;