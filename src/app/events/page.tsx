import { EventItemProps } from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import React from "react";
import { DUMMY_EVENTS } from "../../../dummy-data";

type AllEventsPageProps = {
  events: EventItemProps[];
};

export default function AllEventsPage({events}: AllEventsPageProps) {
  return (
    <>
    <EventList events={DUMMY_EVENTS}/>
    </>
  )
}

