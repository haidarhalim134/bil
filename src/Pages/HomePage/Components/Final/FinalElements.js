import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  position: relative;
  z-index: 1;
  background: #182434;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 48px;
  text-align: center;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const Img = styled.img`
  border-radius: 45px;
  width: auto;
  height: 450px;
`;

export const BaseLink =styled(LinkR)`
 color: #fff;
`

