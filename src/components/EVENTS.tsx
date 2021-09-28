import EventCard from "./EventCard"
import { eventsType } from '../events'
import { useState, useEffect } from 'react'
import { startOfDay, format, addHours } from 'date-fns'
import './styles/Events.css'


type props = {
    events: eventsType[],
}

export default function EVENTS({ events }: props) {

    const [dueDateEvents, setDueDateEvents] = useState<eventsType[]>([]);
    const [contentPublishEvents, setContentPublishEvents] = useState<eventsType[]>([]);
    const [releaseEvents, setReleaseEvents] = useState<eventsType[]>([]);
    const [timesMap, setTimesMap] = useState<Map<string, number>>(new Map<string, number>())

    useEffect(() => {
        setDueDateEvents(events.filter(event => event.category === 'due-date'))
        setContentPublishEvents(events.filter(event => event.category === 'content-publish'))
        setReleaseEvents(events.filter(event => event.category === 'release'))

        setMap()
    }, [events])

    const setMap = () => {
        let newMap = new Map<string, number>()
        for (let hour = 8; hour < 24; hour++) {
            let el = document.getElementsByClassName('time-item')[hour - 8]
            newMap.set(
                format(addHours(startOfDay(new Date()), hour), 'h:mm a'),
                el ? el.getBoundingClientRect().top - 127 : 1
            )
        }
        setTimesMap(newMap)
    }

    useEffect(() => {
        setMap()
    }, [])

    return (

        <div className='event-time-container'>

            <div className="event-container">

                <div className='due-date-container'>
                    {
                        dueDateEvents.map(event => {
                            return <EventCard
                                key={event.id}
                                timesMap={timesMap}
                                event={event}
                            />
                        })
                    }
                </div>

                <div className='content-publish-container'>
                    {
                        contentPublishEvents.map(event => {
                            return <EventCard
                                key={event.id}
                                timesMap={timesMap}
                                event={event}
                            />
                        })
                    }
                </div>

                <div className='release-container'>
                    {
                        releaseEvents.map(event => {
                            return <EventCard
                                key={event.id}
                                timesMap={timesMap}
                                event={event}
                            />
                        })
                    }
                </div>
            </div>

            <div className='timeList-container' onScroll={setMap}>
                {
                    Array.from(timesMap.keys()).map((time, idx) => {

                        return <div className='time-item' key={idx}>{time}</div>
                    })
                }
            </div>
        </div>

    )
}


