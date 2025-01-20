import express, { Router } from 'express'
import { addRestaurantDetails } from '../controllers/addRestaurant'
import { getData } from '../controllers/getData'

const router:Router = express.Router()

router.post('/add-restaurant',addRestaurantDetails)
router.get('/get-data',getData)


export default router