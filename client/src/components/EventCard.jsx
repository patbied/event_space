import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const EventCard = (data) => {
    useEffect(() => {
        console.log(data)
        console.log(data.event.id)
    },[])
    // console.log(data)
  return (
    <article>
        <header>
            <p>Event name: {data.event.event_name}</p>
            <p>Location: {data.event.location}</p>
        </header>
        <footer>
          <Link to={'/'+data.event.id}>View more</Link>
        </footer>
    </article>
  )
}
