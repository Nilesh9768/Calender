// import { useState } from "react";
import { format} from "date-fns"
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {IoMdArrowDropdown} from 'react-icons/io'
import './styles/CalenderHeader.css'

type CalenderHeaderProps ={

    decreaseMonth : () => void,
    increaseMonth : () => void,
    showOrHide : () => void
    month:Date,
    year:Date
}
const CalenderHeader = ({decreaseMonth,increaseMonth,month,year,showOrHide} : CalenderHeaderProps) => {


    return (
        <div className='calender-header'>
            <div><FaChevronLeft className='icons' onClick={() => decreaseMonth()} /></div>
            <div className='month-year'>
                <p>{format(month, 'MMMM yyyy')}</p>
               <IoMdArrowDropdown className='dropdown-icon' onClick={()=>showOrHide()}/>
            </div>

            <div><FaChevronRight className='icons' onClick={() => increaseMonth()} /></div>
        </div>
    )
}
export default CalenderHeader