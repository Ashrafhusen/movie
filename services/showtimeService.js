const Showtime = require("../models/Showtime")
const Movie = require('../models/Movie')


exports.createShowtime = async (movieId , date , time , totalSeats) => {
    const movie = await Movie.findById(movieId);
    if(!movie) throw new Error("Movie Not Found")


    const showtime = await Showtime.create({
        movie : movieId,
        date,
        time , 
        totalSeats,
        availableSeats : totalSeats,
    }
    )

    return showtime;

}


exports.getAllShowtimes = async() => {
    return await Showtime.find().populate('movie' , 'title genre')
}

exports.getShowTimeById = async(showtimeId) => {
    return await Showtime.findById(showtimeId).populate("movie" , 'title genre')
}


exports.updateShowtime = async (showtimeId , updateData) => {
    return await Showtime.findByIdAndUpdate(showtimeId , updateData ,
        {new : true}
    )
    
}

exports.deleteShowtime = async(showtimeId) => {
    return await Showtime.findByIdAndDelete(showtimeId)
}

