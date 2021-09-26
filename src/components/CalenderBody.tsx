import { ReactNode, useState } from 'react'
import { format, isEqual, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth } from 'date-fns'
import './styles/CalenderBody.css'
import { eventsArray } from '../events'

type BodyProps = {
    month: Date,
    year: Date,
    filterEvents: (date: Date) => void,
}
type objectType = {
    isDuePresent: boolean,
    isReleasePresent: boolean,
    isContentPresent: boolean
}
let dateMap = new Map<string, objectType>();

const hasEvent = (date: Date): boolean => {

    for (let i = 0; i < eventsArray.length; i++) {
        
        if (isSameDay(date, eventsArray[i].date)) {
           
            const category = eventsArray[i].category;
            const thisDate: string = format(date, 'd/M/yyyy');
            const isDatePresent = dateMap.has(thisDate)
            let indicatorObj: objectType | undefined = {
                'isDuePresent': false,
                'isReleasePresent': false,
                'isContentPresent': false
            };
            if (isDatePresent) {
                Object.assign(indicatorObj, dateMap.get(thisDate))
            }
            if (indicatorObj !== undefined) {
                if (category === 'due-date') {
                    indicatorObj.isDuePresent = true
                    dateMap.set(thisDate, indicatorObj)
                } else if (category === 'content-publish') {
                    indicatorObj.isContentPresent = true
                    dateMap.set(thisDate, indicatorObj)
                } else {
                    indicatorObj.isReleasePresent = true
                    dateMap.set(thisDate, indicatorObj)
                }
            }
        }

    }
    return dateMap.has(format(date, 'd/M/yyyy'));
}

const CalenderBody = ({ month, filterEvents }: BodyProps) => {

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
                    <div className='indicator-container'>
                        {
                            hasEvent(date) ?
                                dateMap.get(format(date, 'd/M/yyyy'))?.isDuePresent ? <div className='due-indicator'></div> : null
                                : null
                        }
                        {
                            hasEvent(date) ?
                                dateMap.get(format(date, 'd/M/yyyy'))?.isContentPresent ? <div className='content-indicator'></div> : null
                                : null
                        }
                        {
                            hasEvent(date) ?
                                dateMap.get(format(date, 'd/M/yyyy'))?.isReleasePresent ? <div className='release-indicator'></div> : null
                                : null
                        }
                    </div>

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
            {dates}
        </div>
    )
}

export default CalenderBody;