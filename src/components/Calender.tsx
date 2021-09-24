import { useState } from "react"
import CalenderHeader from "./CalenderHeader"
import Weekdays from "./Weekdays"
import CalenderBody from "./CalenderBody"

import {
    format,
    subMonths,
    addMonths,
    subYears,
    addYears
} from "date-fns"
import './styles/Calender.css'

export type filterEventsProps = {

    filterEvents:(date:Date) => void

}
export default function Calender({filterEvents} : filterEventsProps) {

    const [month, setMonth] = useState<Date>(new Date())
    const [year, setYear] = useState(new Date())

    const decreaseMonth = () => {
        
        const currMonth: string = format(month, 'MMMM');
        if (currMonth === 'January') {
            setYear(subYears(year, 1))
        }
        setMonth(subMonths(month, 1))

    }

    const increaseMonth = () => {
        const currMonth: string = format(month, 'MMMM');
        if (currMonth === 'December') {
            setYear(addYears(year, 1))
        }
        setMonth(addMonths(month, 1))

    }
    return (
        <div className="calender-container">
            <CalenderHeader
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                month={month}
                year={year}
            />
            <Weekdays />
            <CalenderBody
                month={month}
                year={year}
                filterEvents={filterEvents}
            />
        </div>
    )
}