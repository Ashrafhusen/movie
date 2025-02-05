const showtimeService = require('../services/showtimeService')

exports.createShowtime = async(req ,res) => {
    try {
        const {movieId , date , time , totalSeats} = req.body;
        const showtime = await showtimeService.createShowtime(movieId , date , time ,totalSeats)
        res.status(201).json(showtime);
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
}


exports.getAllShowtimes = async(req , res) => {
    try {
        const showtimes = await showtimeService.getAllShowtimes();
        res.status(200).json(showtimes);
        
    } catch (error) {

        res.status(500).json({message : error.message})
        
    }
}

exports.getShowtimeById = async (req , res) => {
    try {
        const showtimes = await showtimeService.getShowTimeById(req.params.id);
        res.status(200).json(showtimes);
        
    } catch (error) {
        res.status(500).json({message : error.message}
        )
        
    }
}

exports.updateShowtime = async(req, res) => {
    try {

        const updatedShowtime = await showtimeService.updateShowtime(req.params.id , req.body)
        res.status(200).json(updatedShowtime)
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
}

exports.deleteShowtime = async (req , res) => {
    try {
        await showtimeService.deleteShowtime(req.params.id);
        res.status(200).json({message : "Showtime deleted successfully"})
    } catch (error) {
        res.status(200).json({message : error.message})
        
    }
}


