import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { EventCard } from '../components/EventCard'
const Location = () => {
    const {location_name} = useParams()
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEventsAtLocation = async() => {
            const response = await fetch('http://localhost:3000/locations/'+location_name)
            const data = await response.json()
            console.log(data)
            setEvents(data)
        }
        getEventsAtLocation()
    },[])
  return (
    <div>
        <h1>Events at {location_name}</h1>
        {events && events.length > 0 ?
        events.map((event, index) => {
            return( <EventCard key={index} event={event}/>)
        }) : 'no events'}
    </div>
  )
}

export default Location