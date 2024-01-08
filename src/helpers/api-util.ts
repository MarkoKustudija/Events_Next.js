// import { DUMMY_EVENTS } from "../../dummy-data";

// from dummy_backend firebase
export async function getAllEvents() {
    const response = await fetch(
     'https://events-a935c-default-rtdb.firebaseio.com/events.json',
      );
    const data = await response.json();
  
    const events = [];
  
    for (const key in data) {
      events.push({
        id: key,
        ...data[key]
      });
    }
  
    return events;
  }
  
  export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    // const allEvents = DUMMY_EVENTS;
    return allEvents.filter((event) => event.isFeatured);
  }
  
  export async function getEventById(eventId:string) {
    const allEvents = await getAllEvents();
    // const allEvents = DUMMY_EVENTS;
    return allEvents.find((event) => event.id === eventId);
  }
  
  export async function getFilteredEvents(dateFilter: any) {
    const { year, month } = dateFilter;
  
    const allEvents = await getAllEvents();
    // const allEvents = DUMMY_EVENTS;
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }