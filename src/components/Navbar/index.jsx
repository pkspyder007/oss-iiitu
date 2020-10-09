import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = ({ toggleNav }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">OSS UNA</NavLogo>
        <MobileIcon onClick={toggleNav} >
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="event">Event</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="coc">Code Of Conduct</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contact">Contact</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
