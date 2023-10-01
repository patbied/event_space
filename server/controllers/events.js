import { pool } from "../config/database.js";



const getEvents = async(req,res) => {
    try {
        const data = await pool.query("SELECT * FROM events ORDER BY location ASC")
        // console.log(data)
        res.status(200).json(data.rows)
    }catch(err){
        res.status(409).json({message: err.message})
    }
}

const getEvent = async(req,res) => {
    try {
        const query = "SELECT * FROM events where id = $1"
        const eventId = req.params.eventId
        console.log('event id',eventId)
        const data = await pool.query(query,[eventId])
        res.status(200).json(data.rows)
    } catch(err){
        res.status(409).json({message: err.message})
    }
}

const getLocations = async(req,res) => {
    try {
        const query = "SELECT DISTINCT location from EVENTS ORDER BY location ASC"
        const data = await pool.query(query)
        res.status(200).json(data.rows)
    } catch(err) {
        res.status(409).json({message: err.message})
    }
}

const getEventsAtLocation = async(req, res) => {
    try {
        const location = req.params.location
        const query = "SELECT * FROM events WHERE location = $1"
        const data = await pool.query(query, [location])
        res.status(200).json(data.rows)
    } catch(err) {
        res.status(409).json({message: err.message})
    }
}


export default {
    getEvents,
    getEvent,
    getLocations,
    getEventsAtLocation
}