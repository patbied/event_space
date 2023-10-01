import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import './App.css'
import 'picocss/pico.min.css'
import Events from './pages/Events'
import { Event } from './pages/Event'
import Locations from './pages/Locations'
import Location from './pages/Location'
const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Events />
    },
    {
      path: '/:id',
      element: <Event/>
    },
    {
      path: '/locations',
      element: <Locations/>
    },
    {
      path: '/locations/:location_name',
      element: <Location/>
    }
   
  ])

  return (
    <div className='app container'>
      <nav>
        <ul>
          <li><strong>Tampa Events</strong></li>
        </ul>
        <ul>
        <Link style={{'margin': '10px'}} to='/' role='button'>Home</Link>
        <Link style={{'margin': '10px'}} to='/locations' role='button'>Events by Location</Link>
        </ul>
      </nav>
   

      <main>
        {element}
      </main>
    </div>
  )
}

export default App