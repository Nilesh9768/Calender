import { format } from 'date-fns'
import {eventsType} from '../events'

type EventCardProps = {
    event :eventsType,
    timesMap?: Map<string, number>
}
export default function EventCard({timesMap ,event}: EventCardProps) {

    const {entry, moveTo, assignedBy, category, date} = event
    //Get hour,minute, and AM or PM
    const hour = format(date, 'h')
    const minutes = format(date, 'mm')
    const ampm = format(date, 'a')


    let d1 = timesMap?.get('11:00 AM')
    let d2 = timesMap?.get('12:00 PM')
    let d3 = timesMap?.get(`${hour}:00 ${ampm}`)

    let diff, topPosition;
    if (d1 !== undefined && d2 !== undefined) {
        //Getting th distance between two time
        diff = d2 - d1
    }
    if (d3 && diff) {
        let perc = (parseInt(minutes) * 100) / 60
        topPosition = d3 + (perc * diff) / 100
    }


    const cardStyle: React.CSSProperties = {
        position: 'absolute',
        top: topPosition
    }

    return (
        <div className={category} style={cardStyle}>
           
            <div className='time'>{format(date.getTime(), 'h:mm a')}</div>
            <div className='card-element'><b>Entry:</b> {entry}</div>
            <div className='card-element'><b>Move To:</b> {moveTo}</div>
            <div className='card-element'><b>Assigned By:</b> {assignedBy}</div>
        </div>
    )
}
