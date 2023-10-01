import { pool } from "./database.js";
import './dotenv.js' 
import eventData from "../data/eventData.js";


const seedGiftsTable = async () => {
    
    
    
    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (event_name, event_date, time, ages, location) VALUES ($1, $2, $3, $4, $5)'
          }
          const values = [
            event.event_name,
            event.event_date,
            event.time,
            event.ages,
            event.location

        ]
          pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }
        
            console.log(`✅ ${event.event_name} added successfully`)
        })
    })
    }
    
    seedGiftsTable()