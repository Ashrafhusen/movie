const adminService = require('../services/adminService')


exports.getAllReservations = async(req, res) => {
    try {
        const reservations = await adminService.getAllReservations();
        res.status(201).json(reservations)
        
    } catch (error) {
        res.status(400).json({message : error.message})
        
    }
}


exports.getTotalRevenue = async (req, res) => {
    try {
        const totalRevenue = await adminService.getTotalRevenue();
        res.status(200).json(totalRevenue);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

exports.getShowtimeOccupancy = async (req , res) => {
    try {
        const {showtimeId} = req.params;
        const occupancy = adminService.getShowtimeOccupancy(showtimeId);
        res.status(200).json(occupancy);
        
    } catch (error) {

        res.status(400).json({message : error.message})
        
    }
}