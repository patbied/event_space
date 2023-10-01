import React, { useState, useEffect } from 'react'
import { EventCard } from '../components/EventCard'

const Events = ({index}) => {
    const [location, setLocation] = useState('')
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getAllEvents = async() => {
            const response = await fetch('http://localhost:3000')
            const data = await response.json()
            console.log(data)
            setEvents(data)
        }
        getAllEvents()
        
    },[])
    return (
        <> 
        <h1>All Events</h1>
        {events && events.length > 0 ?
        events.map((event, index) => {
            return( <EventCard key={index} event={event}/>)
        }) : 'no events'}
        </>
    )
}

export default Events