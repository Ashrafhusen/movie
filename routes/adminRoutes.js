const express = require('express');

const { getAllReservations , getTotalRevenue , getShowtimeOccupancy } = require('../controllers/adminController')

const {protect , isAdmin } = require('../middleware/authMiddleware')


const router = express.Router();

router.get('/reservations' , protect , isAdmin , getAllReservations)
router.get('/revenue' , protect , isAdmin ,getTotalRevenue)
router.get('/occupancy/:showtimeId' , protect , isAdmin , getShowtimeOccupancy)


module.exports = router;
