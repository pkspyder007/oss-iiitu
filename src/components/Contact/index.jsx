import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiTwitter, FiMail } from "react-icons/fi";
import {
  ContactContainer,
  ContactHeading,
  ContactLinkText,
  IconColumn,
  ContactIcon,
  ContactIconsWapper,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactHeading>Contact Us</ContactHeading>
        <IconColumn>
        <ContactIconsWapper>
          <ContactIcon>
            <FaInstagram />
          </ContactIcon>
          <ContactLinkText href="https://www.instagram.com/oss_una/">oss_una</ContactLinkText>
        </ContactIconsWapper>
        <ContactIconsWapper>
          <ContactIcon>
            <FiTwitter />
          </ContactIcon>
          <ContactLinkText href="https://twitter.com/oss_una">oss_una</ContactLinkText>
        </ContactIconsWapper>
        <ContactIconsWapper>
          <ContactIcon>
            <FaTelegramPlane />
          </ContactIcon>
          <ContactLinkText href="http://t.me/ossu_community">@ossu_community</ContactLinkText>
        </ContactIconsWapper>
        <ContactIconsWapper>
          <ContactIcon>
            <FaTelegramPlane />
          </ContactIcon>
          <ContactLinkText href="http://t.me/oss_una">@oss_una</ContactLinkText>
        </ContactIconsWapper>
        <ContactIconsWapper>
          <ContactIcon>
            <FiMail />
          </ContactIcon>
          <ContactLinkText href="mailto:oss.una@iiitu.ac.in">oss.una@iiitu.ac.in</ContactLinkText>
        </ContactIconsWapper>
        </IconColumn>
      </ContactContainer>
    </>
  );
};

export default Contact;
