const mongoose  = require('mongoose');

const showTimeSchema = new mongoose.Schema({
    movie : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Movie",
        required : true
    },

    date : {
        type : String , 
        required : true
    },

    time : {
        type : String , 
        required : true
    },
    totalSeats : { 
        type : Number,
        required : true
    },
    availableSeats : {
        type : Number , 
        required : true
    },
},

    {timestamps : true}
    
)

const Showtime = mongoose.model("Showtime" , showTimeSchema)
module.exports = Showtime



