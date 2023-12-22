import { EventItemProps } from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "@/helpers/api-util";

type AllEventsPageProps = {
  events: EventItemProps[];
};

export default function AllEventsPage({events}:AllEventsPageProps) {

  const router = useRouter();


  return (
    <>
    <EventList events={events}/>
    </>
  )
}

export async function getStaticProps() {

  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}


