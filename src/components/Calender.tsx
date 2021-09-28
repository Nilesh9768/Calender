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
import { startOfYear } from "date-fns/esm"

export type CalenderProps = {

    filterEvents: (date: Date) => void
}
export default function Calender({ filterEvents, }: CalenderProps) {

    const [month, setMonth] = useState<Date>(new Date())
    const [year, setYear] = useState(new Date())
    const [showMonthList,setShowMonthList] = useState(false)

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
    const showOrHide = () =>{
        setShowMonthList(!showMonthList)
    }
    const setPickedMonth = (month : number) =>{
        setMonth(addMonths(startOfYear(new Date()),month))
        setShowMonthList(!showMonthList)
    }
    return (
        <div className="calender-container">
            {console.log(showMonthList)}
            <CalenderHeader
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                showOrHide = {showOrHide}
                month={month}
                year={year}
            />
            <Weekdays />
            <CalenderBody
                month={month}
                year={year}
                filterEvents={filterEvents}
                showMonthList = {showMonthList}
                setPickedMonth = {setPickedMonth}
            />
        </div>
    )
}