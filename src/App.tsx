import { useState , useEffect} from 'react';
import Calender from './components/Calender';
import EVENTS from './components/EVENTS';
import Summary from './components/Summary';
import { eventsArray, eventsType } from './events'
import { isSameDay } from 'date-fns';
import './App.css';


function App() {
  const [events, setEvents] = useState<eventsType[]>([])

  const filterEvents = (date: Date) => {
    // console.log(date)
    let filteredEvents: eventsType[] = eventsArray.filter(event => {
      return isSameDay(event.date, date)
    })

    // console.log(filteredEvents)
    setEvents(filteredEvents)
  }


  useEffect(()=>{
    let filteredEvents: eventsType[] = eventsArray.filter(event => {
      return isSameDay(event.date, new Date())
    })
    setEvents(filteredEvents)
  },[])
  return (
    <div className="App">
      {/* {console.log(events)} */}
      <Calender filterEvents={filterEvents}/>
      <EVENTS events={events}/>
      <Summary />
    </div>
  );
}

export default App;

