import React from "react";
import { ContactHeading } from "../Contact/ContactElements";
import { Heading, Subtitle, TopLine } from "../Info/InfoElements";
import { eventOne } from "./data";
import {
  EventContainer,
  EventWrapper,
  EventImg,
  EventInfo,
  EventInfoContainer, BtnGrp, EventBtn
} from "./EventElements";

const Event = () => {
  return (
    <EventContainer id='events'>
      <>
        <ContactHeading dark={true}>Events</ContactHeading>
      </>
      <EventWrapper>
        <EventCard {...eventOne} />
      </EventWrapper>
    </EventContainer>
  );
};

export default Event;

const EventCard = ({ id, img, heading, description, topLine, links }) => {
  return (
    <>
      <EventInfo id={id}>
        <EventImg src={img} maxHeight={740} />
        <EventInfoContainer>
          <div>
            <TopLine>{topLine}</TopLine>
            <Heading>{heading}</Heading>
            <Subtitle darkText={true}>{description}</Subtitle>
          </div>
          <BtnGrp>
            {links.map((el, i) => (
              <EventBtn key={i} primary={((i +1) % 2) ? true : false} href={el.link}>{el.title}</EventBtn>
            ))}
          </BtnGrp>
        </EventInfoContainer>
      </EventInfo>
    </>
  );
};
