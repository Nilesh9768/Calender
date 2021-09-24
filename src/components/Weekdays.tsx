
import { format, addDays,startOfWeek } from 'date-fns'

import './styles/Weekdays.css'
export default function Weekdays() {

    let days : number[] = [0,1,2,3,4,5,6];
    
    let startDate : Date = startOfWeek(new Date())
    return (
        <div className='days-container'>
            {
                days.map((ind: number) => {
                    return <span key={ind} className='day'>{format(addDays(startDate, ind), 'eee')}</span>
                })
            }
        </div>
    )
}
