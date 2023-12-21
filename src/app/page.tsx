import EventItem from "@/components/events/EventItem";
import EventList from "@/components/events/EventList";
import { Prosto_One } from "next/font/google";
import { DUMMY_EVENTS } from "../../dummy-data";


export default function Home(props: any) {
  return (
     <>
     <h1>Hello World</h1>
     <EventList events={DUMMY_EVENTS}/>
     </>
  )
}
