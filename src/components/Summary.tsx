import { useState, useEffect } from "react";
import { eventsType } from "../events"
import { format } from 'date-fns'

type props = {
    events: eventsType[],
}

export default function Summary({ events }: props) {

    const [dueDateEvents, setDueDateEvents] = useState<eventsType[]>([]);

    useEffect(() => {
        setDueDateEvents(events.filter(event => event.category === 'due-date'))
    }, [events])
    return (
        <div className='summary-container'>
            <p>All Day Event(s)</p>
            {
                dueDateEvents.map(event => {
                    return (
                        <div className='summary-card' key={event.id}>
                            <div className='time'>{format(event.date.getTime(), 'h:mm a')}</div>
                            <div className='card-element'><b>Entry:</b> {event.entry}</div>
                            <div className='card-element'><b>Move To:</b> {event.moveTo}</div>
                            <div className='card-element'><b>Assigned By:</b> {event.assignedBy}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}


// return <EventCard
// entry={event.entry}
// moveTo={event.moveTo}
// author={event.assignedBy}
// category={event.category}
// key={event.id}
// date={event.date}
// />
