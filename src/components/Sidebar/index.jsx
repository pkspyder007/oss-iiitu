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
          <SidebarLink to="about" onClick={toggleNav}>
            About
          </SidebarLink>
          <SidebarLink to="about" onClick={toggleNav}>
            Event
          </SidebarLink>
          <SidebarLink to="about" onClick={toggleNav}>
            Code Of Conduct
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact" onClick={toggleNav}>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar
