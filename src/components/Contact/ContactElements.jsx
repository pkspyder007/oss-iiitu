import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background: #000;
  color: white;
  min-height: 400px;
`;

export const ContactHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  border-bottom: 5px solid #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const IconColumn = styled.div`
  display: flex;
`;

export const ContactIconsWapper = styled.div`
  width: 50%;
  display: flex;
  justify-self: flex-start;
  margin-bottom: 24px;
  padding: 24px;
`;


export const ContactIcon = styled.div`
  font-size: 32px;
`;

export const ContactLinkText = styled.a`
  font-size: 28px;
  margin: auto 12px;
  text-decoration: none;
  color: white;
`;

