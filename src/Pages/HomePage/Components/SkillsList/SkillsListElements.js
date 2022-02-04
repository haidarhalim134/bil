import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  position: relative;
  z-index: 1;
  background: #fff;
  overflow: hidden;
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
  width: 70%;
  margin-top: 5%;
  @media screen and (max-width: 960px) {
    width: 85%;
  }
`;

export const ListItemWrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: ${({ left }) => (left ? "start" : "end")};
  align-items: center;
  @media screen and (max-width: 960px) {
    justify-content: start;
  }
`;

export const ListItemTextWrap = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ListIndex = styled.div`
  min-height: 50px;
  min-width: 50px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
  background-color: ${({ color }) => color};
`;

export const ItemTitle = styled.h3`
  color: #182434;
  font-size: 32px;
  font-weight: bold;
  text-align: start;
`;
