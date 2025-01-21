import express, { Router } from 'express'
import { addRestaurantDetails } from '../controllers/addRestaurant'
import { getData } from '../controllers/getData'
import { deleteData } from '../controllers/deleteData'

const router:Router = express.Router()

router.post('/add-restaurant',addRestaurantDetails)
router.get('/get-data',getData)
router.delete('/deleteData/:id',(req,res,next)=>deleteData(req,res,next))

export default router