import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled(LinkR)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  /* border: solid 1px red; */
  color: ${({ colored }) => (colored ? "#182434" : "#fff")};
  font-size: 32px;
`;

export const IconCont = styled.img`
  transform: rotate(-5deg) scale(0.8);
  margin: 8px;
`