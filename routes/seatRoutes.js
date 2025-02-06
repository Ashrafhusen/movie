const express = require('express')

const {getAvailableSeats ,createSeatsForShowtime} = require('../controllers/seatController');
const { protect, isAdmin } = require("../middleware/authMiddleware");


const router = express.Router();


router.post("/create", protect, isAdmin, createSeatsForShowtime);
router.get('/:showtimeId' , getAvailableSeats);

module.exports = router;

