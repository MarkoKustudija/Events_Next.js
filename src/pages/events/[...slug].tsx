import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/Results-title";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

type FilteredEventsPageProps = {
  children: React.ReactNode;
};

export default function FilteredEventsPage({
  children,
}: FilteredEventsPageProps) {

  /** CLIENT side data fetching example */

  const [loadedEvents, setLoadedEvents] = useState<any[]>([]);
  const router = useRouter();

  const filteredData = router.query.slug;

  const { data, error } = useSWR(
    "https://events-a935c-default-rtdb.firebaseio.com/events.json",
    (url: string) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events: any = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return (
      <>
        <p className="center"> Loading ...</p>
      </>
    );
  }

  const filteredYear = filteredData![0];
  const filteredMonth = filteredData![1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button href="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
}
