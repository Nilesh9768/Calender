import { format} from "date-fns"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './styles/CalenderHeader.css'

type CalenderHeaderProps ={

    decreaseMonth : () => void,
    increaseMonth : () => void,
    month:Date,
    year:Date
}
const CalenderHeader = ({decreaseMonth,increaseMonth,month,year} : CalenderHeaderProps) => {

    return (
        <div className='calender-header'>
            <div><FaChevronLeft className='icons' onClick={() => decreaseMonth()} /></div>
            <div className='month-year'>
                <p>{format(month, 'MMMM')}</p>
                <p>{format(year,'yyyy')}</p>
            </div>

            <div><FaChevronRight className='icons' onClick={() => increaseMonth()} /></div>
        </div>
    )
}
export default CalenderHeader