import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from 'react-bootstrap/CardGroup';
import FormEvent from "./formevent";



function Events() {
    const [events, setEvents] = useState([]);

    const loadEvents = () => {
      fetch("http://localhost:8080/api/events")
          .then((response) => response.json())
          .then(events => {
            setEvents(events); 
            //console.log('Events fetched...', events);
            })
    }

    useEffect(() => {loadEvents()}, []);

    const postEvent = (newEvent) =>{
      console.log("from inside the post event function", newEvent)
      return fetch("http://localhost:8080/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log("From the post response", data);
          setEvents((events) => [...events, data]);
        });
    }

  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime}/>
            )}
    </CardGroup>
    <FormEvent postEvent={postEvent}/>
    </div>
  );
}

export default Events;