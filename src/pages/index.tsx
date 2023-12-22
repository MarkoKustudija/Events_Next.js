import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/EventList";
import NewsLetterRegistration from "@/components/input/NewsLetterRegistration";
// import "../styles/globals.css";


require('dotenv').config();

export default function Home(props: any) {

  
  return (
     <>
     <NewsLetterRegistration />
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


