import EventList from "@/components/events/EventList";
import { DUMMY_EVENTS } from "../../dummy-data";
// import "../styles/globals.css";


export default function Home(props: any) {
  return (
     <>
     <h1>Hello World</h1>
     <EventList events={DUMMY_EVENTS}/>
     </>
  )
}
