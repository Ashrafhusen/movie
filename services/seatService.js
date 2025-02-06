const Seat = require('../models/Seat')
const Showtime = require('../models/Showtime')


exports.createSeatsForShowtime = async(showtimeId , totalSeats) => {
    const showtime = await Showtime.findById(showtimeId);
    if(!showtime) throw new Error("Show not Found")

    const seats = []
    for (let i = 1; i <= totalSeats ; i++){
        let seatNumber = `A${i}`;
        seats.push({showtime : showtimeId , seatNumber});
    }

    return await Seat.insertMany(seats);

}



exports.getAvailableSeats = async (showtimeId) => {
    return await Seat.find({showtime : showtimeId , isReserved : false});
}

