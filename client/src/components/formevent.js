import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormEvent = (props) => {
    //{id: 1, title: 'Women ', location: 'SF', eventtime: '2023-04-21'}

    // This is the original State with not initial data
    const [event, setEvent] = useState({title: "", location: "", eventtime: "2023-04-21"})

    //create functions that handle the event of the user typing into the form
    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        //console.log(title);
        setEvent((event) => ({ ...event, title: newTitle}));
    };

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        //console.log(location);
        setEvent((event) => ({ ...event, location: newLocation }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEvent(event);
        //console.log(event);
        props.postEvent(event)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Text >To Add a new event complete our Form</Form.Text>
            <Form.Group className="mb-8" controlId="add-event-title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Name of your event" value={event.title} onChange={handleTitleChange} />
            </Form.Group>

            <Form.Group className="mb-8" controlId="add-event-location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location of your event" value={event.location} onChange={handleLocationChange} />
            </Form.Group>
            <Button variant="primary" type="submit">SAVE</Button>
        </Form>
    )
}

export default FormEvent;