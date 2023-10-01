import express from 'express'

const router = express.Router()
import eventController from '../controllers/events.js'

router.get('/', eventController.getEvents)

router.get('/event/:eventId', eventController.getEvent)
router.get('/locations', eventController.getLocations)
router.get('/locations/:location', eventController.getEventsAtLocation)
export default router