import React, { useState, useEffect } from "react";
import IconText from '../IconText'
import { Button, ButtonRound } from '../BaseButton/ButtonElements'
import { Nav, NavContainer, Bundle } from './NavBarElements'

const NavBar = ({notTrans}) => {
  const [visible, setvisible] = useState(true);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });
    return (
      <Nav visible={visible}>
        <NavContainer>
          <IconText />
          <Bundle>
            <Button to="/">Courses</Button>
            <Button to="/">Terms of Service</Button>
            <Button to="/">About Us</Button>
          </Bundle>
          <ButtonRound to="/" color={"#d19b3b"} hover={"#f14963"}>
            <i className='fas fa-phone-alt' style={{}}/>  Contact Us
          </ButtonRound>
        </NavContainer>
      </Nav>
    );
}

export default NavBar
