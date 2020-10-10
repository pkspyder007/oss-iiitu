import styled from 'styled-components'

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;


export const EventWrapper = styled.div``;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const EventImg = styled.img`
  max-height: ${({maxHeight}) => (`${maxHeight}px`)};
  padding: 0 24px;
  margin-right: 32px;
  margin-bottom: 24px;

  @media screen and (max-width: 900px) {
    max-height: ${({maxHeight}) => (`${maxHeight * 0.6}px`)};
    margin:  auto;
    margin-bottom: 24px;
  }
`;

export const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnGrp = styled.div`
  display: flex;
  align-items: center;
`;

export const EventBtn = styled.a`
  text-decoration: none;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#101660' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
   align-items: center;
   transition: 0.2s all ease-in-out;
   margin-right: 12px;

  &:hover {
    transition: 0.2s all ease-in-out;
    background: ${({ primary }) => (primary ? '#010606' : '#01bf71')};
   }
`;