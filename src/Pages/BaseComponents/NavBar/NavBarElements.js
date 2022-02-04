import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  z-index: 999;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${({ visible }) => (visible ? "#182434" : "rgba(24,36,52,0.2)")};
  /* opacity: ${({ visible }) => (visible ? "initial" : "20%")}; */
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const Bundle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`