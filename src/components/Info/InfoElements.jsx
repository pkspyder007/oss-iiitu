import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screeen and (max-width: 786px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  min-height: 860px;
  width: 100%;
  /* max-width: 1100px; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    flex-direction: ${({ imgStart }) => (imgStart ? "column-reverse" : "column")};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  max-width: 50%;
  padding: 0 15px;

   @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Column2 = styled.div`
  max-width: 50%;
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 10px;
  padding-bottom: 100px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  max-width: 440px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
  max-width: 540px;
  margin: auto;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`;
