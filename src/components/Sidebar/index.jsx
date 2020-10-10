import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen , toggleNav }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNav}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" 
             smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} onClick={toggleNav}>
            About
          </SidebarLink>
          <SidebarLink to="events" smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} onClick={toggleNav}>
            Events
          </SidebarLink>
          <SidebarLink to="coc" smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} onClick={toggleNav}>
            Code Of Conduct
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="contact" smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80} onClick={toggleNav}>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar
