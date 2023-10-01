import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch('http://localhost:3000/locations')
            const data = await response.json()
            setLocations(data)
            console.log(data)
            // data.forEach(loc => {
            //     console.log('loc',loc.location)
            // });
        }
        getLocations()
        
    },[])
  return (
    <div>
        <h1>Locations</h1>
        {locations && locations.length > 0 ?
        
        locations.map((location, index) => {
            return (<div style={{padding: '10px'}} key={index} className="grid"><Link key={index} role="button" to={'/locations/'+location.location}>{location.location}</Link></div>)
        }) : 'No Locations'}
    </div>
  )
}

export default Locations