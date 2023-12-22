import { getEventById, getFeaturedEvents } from "@/api/api-util";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventSummary from "@/components/event-detail/EventSummary";
import ErrorAlert from "@/components/ui/ErrorAlert";
import React, { Fragment } from "react";

export default function EventDetailsPage(props: any) {
  if (!props.selectedEvent) {
    return <p>Error, no event found!</p>;
  }

  const event = props.selectedEvent;

  console.log(event);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticPaths() {
  
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    fallback: "blocking",
    paths: paths,
  };
}

export async function getStaticProps(context: any) {
  const eventId = context.params.eventId;

  try {
    const event = await getEventById(eventId);

    if (!event) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        selectedEvent: event,
      },
      revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching event:", error);

    return {
      notFound: true,
    };
  }
}
