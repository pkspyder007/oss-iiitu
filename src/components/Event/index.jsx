import React from "react";
import { ContactHeading } from "../Contact/ContactElements";
import { Heading, Subtitle, TopLine } from "../Info/InfoElements";
import { eventOne, eventTwo } from "./data";
import {
  EventContainer,
  EventWrapper,
  EventImg,
  EventInfo,
  EventInfoContainer, BtnGrp, EventBtn, EventSubtitle
} from "./EventElements";

const Event = () => {
  return (
    <EventContainer id='events'>
      <>
        <ContactHeading dark={true}>Events</ContactHeading>
      </>
      <EventWrapper>
        <EventCard {...eventTwo} />
      </EventWrapper>
      {/* <EventWrapper>
        <EventCard {...eventOne} />
      </EventWrapper> */}
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
            <EventSubtitle darkText={true}>{description}</EventSubtitle>
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
