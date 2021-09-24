import {format} from 'date-fns'
type EventCardProps = {
    entry: string,
    moveTo: string,
    author: string,
    category:string,
    date:Date,
    timesMap:Map<string,number>
}
export default function EventCard({entry,moveTo,author,category,date,timesMap} : EventCardProps) {

    const cardStyle : React.CSSProperties= {
        position:'absolute',
        top: timesMap.get(format(date,'h:mm a')) 
    }
    return (
        <div className={category} style={cardStyle}>
            <div className='time'>{format(date.getTime(),'h:mm a')}</div>
            <div className='card-element'><b>Entry:</b> {entry}</div>
            <div className='card-element'><b>Move To:</b> {moveTo}</div>
            <div className='card-element'><b>Assigned By:</b> {author}</div>
        </div>
    )
}
