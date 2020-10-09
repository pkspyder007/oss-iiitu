import React, { useState } from "react";
import {
  ArrowRight,
  ArrowForward,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  Img
} from "./HeroElements";
// import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <Img src={require('../../images/head.jpg')} alt="Open source" />
        {/* <VideoBg autoPlay muted loop src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>OSS UNA</HeroH1>
        <HeroP>The Open Source Community OF IIIT Una</HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={1}
            dark={0}
            big={1}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
