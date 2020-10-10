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
  color: ${({dark}) => (dark ? '#000' : '#fff')};
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  border-bottom: 5px solid #01bf71;
`;

export const IconColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactIconsWapper = styled.div`
  display: flex;
  justify-self: flex-start;
  margin-bottom: 24px;
  padding: 24px;

  @media screen and (max-width: 480px) {
    padding: 12px;
  }
`;


export const ContactIcon = styled.div`
  font-size: 32px;
`;

export const ContactLinkText = styled.a`
  font-size: 28px;
  margin: 0 12px;
  text-decoration: none;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

