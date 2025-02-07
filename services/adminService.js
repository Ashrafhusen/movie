const Reservation = require('../models/Reservation')
const Showtime = require('../models/Showtime')


exports.getAllReservations = async() => {
    return await Reservation.find()
    .populate('user' , 'name email')
    .populate('showtime' , 'date time')
    .populate('seat', 'seatNumber')
}


exports.getTotatRevenue = async () => {
    const totalBookings = await Reservation.countDocuments();
    const perTicketPrice = 100;
    return {totalRevenue : totalBookings * perTicketPrice}

}



exports.getShowOccupancy = async(showtimeId) => {
    const showtime = await Showtime.findById(showtimeId)
    if(!showtime) throw new Error('Showtime Not Found');

    const bookedTickets = showtime.totalSeats - showtime.availableSeats;
    const occupancyRate = (bookedTickets / showtime.totalSeats) * 100;


    return {
        showtimeId,
        totalSeats : showtime.totalSeats,
        bookedTickets,
        availableSeats : showtime.availableSeats,
        occupancyRate :   `${occupancyRate.toFixed(2)}%`

    }
}

