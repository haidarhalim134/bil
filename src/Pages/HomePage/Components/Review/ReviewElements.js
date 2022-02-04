import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  position: relative;
  z-index: 1;
  background: #182434;
  /* border: solid 1px red; */
  @media screen and (max-width: 960px) {
    height: 800px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 48px;
  text-align: center;
`;

export const ReviewWrap = styled.div`
  height: 60%;
  width: 85%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-right: solid 2px #5c6576;
  @media screen and (max-width: 960px) {
    height: 80%;
    flex-wrap: wrap;
  }
`;

export const ProfileWrap = styled.div`
  width: 200px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 960px) {
    height: 50%;
  }
`;

export const ProfileImg = styled.img`
    border-radius: 10%;
    width: 150px;
    height: 150px;
`
export const Name = styled.h3`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;