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
`;

export const DecorWrap = styled.div`
  width: 100%;
  height: 45%;
`;

export const Decor = styled.div`
  background: #182434;
  height: 100%;
  overflow: hidden;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NormalWrap = styled.div`
height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
`
export const SubTitle = styled.h2`
  color: #182434;
  font-size: 48px;
`;

export const ItemWrap = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  max-width: 180%;
  max-height: 180%;
  object-fit: scale-down;
`;

export const Desc = styled.p`
  color: ${({ white }) => (white ? "#fff" : "#182434")};
  text-align: center;
  font-size: ${({ title }) => (title ? "16px" : "18px")};
  font-weight: ${({ title }) => (title ? "bold" : "initial")};
  font-style: ${({ title }) => (title ? "initial" : "italic")};
`;
