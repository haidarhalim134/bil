import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  height: 100%;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: border 0.2s ease-in;
    border-bottom: 5px solid #d19b3b;
  }
`;

export const ButtonRound = styled(LinkR)`
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #182434;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  background-color: ${({ color }) => color};

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: ${({ hover, color }) => (hover ? hover : color)};
  }
`;