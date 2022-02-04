import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 300px;
  position: relative;
  z-index: 1;
  background: #fff;
  overflow: hidden;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 70%;
`;

export const LinkColumnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 60%;
  margin: 10px;
`;

export const FooterLink = styled(LinkR)`
  text-decoration: none;
  color: #182434;
`;

export const SubTitle = styled.p`
  color: #182434;
  font-size: 18px;
  font-weight: bold;
`;

export const BottomLinkWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;