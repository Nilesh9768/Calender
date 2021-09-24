import { ReactNode, useState} from 'react'
import { format, isEqual, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns'
import './styles/CalenderBody.css'

type BodyProps = {
    month: Date,
    year: Date,
    filterEvents:(date:Date) => void
}

const CalenderBody = ({ month, year,filterEvents }: BodyProps) => {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    let monthStart: Date = startOfMonth(month)
    let monthEnd: Date = endOfMonth(month)
    let startDate: Date = startOfWeek(monthStart)
    let endDate: Date = endOfWeek(monthEnd)
    let dates: ReactNode[] = []

    for (let i: number = 0; i < parseInt(format(monthEnd, 'd'));) {

        if (isEqual(startDate, monthStart)) {
            let date: Date = addDays(monthStart, i);
            let currentDateClass: string = isSameDay(Date.now(), date) ?
                'cell current-date' : 'cell'
            currentDateClass += isSameDay(date, selectedDate) ? ' selected' : ''
            dates.push(
                <div
                    className={currentDateClass}
                    key={i}
                    onClick={() => {
                        
                        setSelectedDate(date)
                        filterEvents(date)
                    }}
                >
                    {format(date, "d")}
                </div>
            );
            i++;
        } else {
            dates.push(
                <div className='disabled'
                    key={`disabled ${format(startDate, "d")}`}>
                    {format(startDate, "d")}
                </div>
            )
            startDate = addDays(startDate, 1);
        }

    }

    if (!isEqual(monthEnd, endDate)) {
        for (let i = 1; i <= parseInt(format(endDate, 'd')); i++) {
            dates.push(
                <div className='disabled'
                    key={`disabled ${format(addDays(monthEnd, i), "d")}`}>
                    {format(addDays(monthEnd, i), "d")}
                </div>
            )
        }
    }

    return (
        <div className='calender-body'>
            {
                dates
            }
        </div>
    )
}

export default CalenderBody;
