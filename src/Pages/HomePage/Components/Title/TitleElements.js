import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 720px;
  position: relative;
  z-index: 1;
  background: #000;
  margin-top: -80px;
`;

export const TitleBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const TitleWrap = styled.div`
  width: 45%;
  height: auto;
  margin-right: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 2;
  border-radius: 10%;
  background: #182434;
  padding: 3%;
  @media screen and (max-width: 960px) {
    margin-right: 0;
    background: none;
    width: 80%;
    height: 80%;
    align-items: center;
  }
`;

export const TitleText = styled.h1`
  color: #fff;
  font-size: 96px;
  text-align: start;
  @media screen and (max-width: 960px) {
    font-size: 72px;
    text-align: center;
  }
`;

export const DescText = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: start;
  margin-top: 15px;
  margin-bottom: 15px;
  @media screen and (max-width: 960px) {
    font-size: 13.5px;
    text-align: center;
  }
`;