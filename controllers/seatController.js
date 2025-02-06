const seatService = require('../services/seatService')



exports.createSeatsForShowtime = async (req, res) => {
    try {
        const { showtimeId, totalSeats } = req.body;
        const seats = await seatService.createSeatsForShowtime(showtimeId, totalSeats);
        res.status(201).json(seats);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAvailableSeats = async(req, res) => {
    try {
        const { showtimeId } = req.params;

        if (!showtimeId) {
            return res.status(400).json({ message: "Showtime ID is required" });
        }


        const seats = await seatService.getAvailableSeats(showtimeId);
        res.status(200).json(seats);
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
};

