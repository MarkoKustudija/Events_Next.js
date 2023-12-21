import React from "react";
import EventItem, { EventItemProps } from "./EventItem";
import classes from "./EventList.module.css";

type EventListProps = {
  events: EventItemProps[];
};

function EventList({ events }: EventListProps) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
