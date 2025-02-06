const Reservation = require('../models/Reservation');
const Seat = require('../models/Seat')
const Showtime = require('../models/Showtime')


exports.reserveSeat = async(userId , showtimeId , seatId) => {
    const seat = await Seat.findById(seatId);


    if(!seat) throw new Error("Seat Not Found");
    if (seat.isReserved) {
        throw new Error(`Seat ${seat.seatNumber} is already reserved. Please select another seat.`);
    }


    await Seat.findByIdAndUpdate(seatId, { isReserved: true });

    const reservation = await Reservation.create({ user : userId , showtime : showtimeId , seat : seatId 

    })

    await Showtime.findByIdAndUpdate(showtimeId , {$inc : {availableSeats : -1}});

    return reservation;

}


exports.cancelReservation = async(reservationId , userId) => {
    const reservation = await Reservation.findById(reservationId).populate("showtime");

    if(!reservation) throw new Error("Reservation not found");

    if(reservation.user.toString() !== userId) throw new Error("unauthorized");

    const showtimeDate = new Date(reservation.showtime.date);
    const today = new Date();
    if(showtimeDate < today ) throw new Error("Cannot Cancel past reservation")

        await Seat.findByIdAndUpdate(reservation.seat , {isReserved : false});
        await Showtime.findByIdAndUpdate(reservation.showtime , {$inc :{availableSeats : 1 }});

        await Reservation.findByIdAndDelete(reservationId);

        return { message : "Reservation Canceled succesfully "}


}