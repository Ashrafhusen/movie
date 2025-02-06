const express = require('express')

const {reserveSeat , cancelReservation} = require('../controllers/reservationController')
const {protect} = require("../middleware/authMiddleware");


const router = express.Router();

router.post('/' , protect , reserveSeat);
router.delete('/:id', protect, cancelReservation);


module.exports = router;

