const reservationService = require("../services/reserverstionService");


exports.reserveSeat = async (req, res) => {
    try {
        const {showtimeId , seatId } = req.body;
        const reservation = await reservationService.reserveSeat(req.user._id , showtimeId , seatId)
        res.status(201).json(reservation);
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
};

exports.cancelReservation = async(req , res) => {
    try {
        const response = await reservationService.cancelReservation(req.params.id , req.user._id);
        res.status(200).json(response);

        
    } catch (error) {

        res.status(400).json({message : error.message});

        
    }
};
