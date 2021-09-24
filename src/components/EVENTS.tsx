import EventCard from "./EventCard"
import { eventsType } from '../events'
import { useState, useEffect } from 'react'
import { startOfDay, format, addHours } from 'date-fns'

import './styles/Events.css'
import { fromUnixTime } from "date-fns/esm"


type props = {
    events: eventsType[]
}

export default function EVENTS({ events }: props) {

    // console.log(events)
    const [dueDateEvents, setDueDateEvents] = useState<eventsType[]>([]);
    const [contentPublishEvents, setContentPublishEvents] = useState<eventsType[]>([]);
    const [releaseEvents, setReleaseEvents] = useState<eventsType[]>([]);
    let timesArray: string[] = []
    let timesMap = new Map<string, number>()
    useEffect(() => {

        setDueDateEvents(events.filter(event => event.category === 'due-date'))
        setContentPublishEvents(events.filter(event => event.category === 'content-publish'))
        setReleaseEvents(events.filter(event => event.category === 'release'))
        console.log((document.getElementsByClassName('time-item')[4]))
        console.log((document.getElementsByClassName('time-item')[4].getBoundingClientRect()))
    }, [events])
    for (let hour = 8; hour < 24; hour++) {
        timesArray.push(format(addHours(startOfDay(new Date()), hour), 'h:mm a'))
        let el = document.getElementsByClassName('time-item')[hour - 8]
        timesMap.set(format(addHours(startOfDay(new Date()), hour), 'h:mm a'),
            el ? el.getBoundingClientRect().top : 1)
    }
    return (

        <div className='event-time-container'>
            {/* {console.log(timesMap)} */}
            {/* {console.log(document.getElementsByClassName('due-date-container')[0].getBoundingClientRect())} */}

            <div className='timeList-container' style={{ overflow: 'auto' }}>
                {
                    timesArray.map((time, idx) => {

                        return <div className='time-item' key={idx}>{time}</div>
                    })

                }


            </div>

            <div className="event-container">

                <div className='due-date-container'>

                    {

                        dueDateEvents.map(event => {


                            return <EventCard
                                entry={event.entry}
                                moveTo={event.moveTo}
                                author={event.assignedBy}
                                category={event.category}
                                key={event.id}
                                date={event.date}
                                timesMap={timesMap}
                            />

                        })
                    }

                </div>

                <div className='content-publish-container'>
                    {
                        contentPublishEvents.map(event => {
                            return <EventCard
                                entry={event.entry}
                                moveTo={event.moveTo}
                                author={event.assignedBy}
                                category={event.category}
                                key={event.id}
                                date={event.date}
                                timesMap={timesMap}
                            />
                        })
                    }
                </div>

                <div className='release-container'>
                    {
                        releaseEvents.map(event => {
                            return <EventCard
                                entry={event.entry}
                                moveTo={event.moveTo}
                                author={event.assignedBy}
                                category={event.category}
                                key={event.id}
                                date={event.date}
                                timesMap={timesMap}
                            />
                        })
                    }
                </div>
            </div>
        </div>

    )
}


