const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    showtime : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Showtime",
        required : true
    },

    seatNumber : {
        type : String,
        required : true
    },

    isReserved : {
        type : Boolean , 
        default : false
    }
})

module.exports = mongoose.model('Seat' , seatSchema)

