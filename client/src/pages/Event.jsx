import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
export const Event = () => {
    const [event, setEvent] = useState({})
    const {id} = useParams();
    useEffect(() => {
        const getEvent = async() => {
            const response = await fetch('http://localhost:3000/event/'+id)
            // console.log(response)
            const data = await response.json()
            console.log(data[0])
            setEvent(data[0])
        }
        getEvent()
        
    },[id])
  return (
    <article><h1>{event.event_name}</h1><h2>{event.event_date}</h2><h3>{event.location}</h3><h4>{event.time}</h4></article>
  )
}
