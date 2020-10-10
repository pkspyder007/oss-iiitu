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
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
             to="events"
             smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
             >Events</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="coc"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            >Code Of Conduct</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          >Contact</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
