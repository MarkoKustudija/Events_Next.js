import { getFeaturedEvents } from "@/api/api-util";
import EventList from "@/components/events/EventList";
// import "../styles/globals.css";


require('dotenv').config();

export default function Home(props: any) {

  
  return (
     <>
     {/* <h1>Hello World</h1> */}
     <EventList events={props.events}/>
     </>
  )
}

export async function  getStaticProps() {
  const featuredEvents = await getFeaturedEvents();


  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  }
  
}


