import { useState, useEffect } from 'react';
import Calender from './components/Calender';
import EVENTS from './components/EVENTS';
import Summary from './components/Summary';
import { eventsArray, eventsType } from './events'
import { isSameDay, format } from 'date-fns';
import './App.css';


function App() {
	const [events, setEvents] = useState<eventsType[]>([])
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())

	const filterEvents = (date: Date) => {
		
		let filteredEvents: eventsType[] = eventsArray.filter(event => {
			return isSameDay(event.date, date)
		})
		setSelectedDate(date)
		setEvents(filteredEvents)
	}

	useEffect(() => {
		let filteredEvents: eventsType[] = eventsArray.filter(event => {
			return isSameDay(event.date, new Date())
		})
		setEvents(filteredEvents)
	}, [])


	return (
		<div className="app-container">
			<div className='app-header'>
				Calender
			</div>
			<div className='month-date-container'>
				<span className='month-date'>
					{format(selectedDate, 'MMMM d ')}
				</span>
				<span className='weekday'>
					{format(selectedDate, ' eeee')}
				</span>
			</div>
			<div className='app'>
				<Calender
					filterEvents={filterEvents}
				/>
				<EVENTS events={events} />
				<Summary events={events}/>
			</div>

		</div>
	);
}

export default App;

