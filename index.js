const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');

dotenv.config();


const app = express();


//app.use(cors({origin : 'http://localhost:3000' , credentials: true}))
app.use(express.json());
app.use(cookieParser());


connectDb();



app.get('/' , (req , res) => {
    res.send("Movie APi is Running")
})



const authRoutes = require ("./routes/authRoutes");
app.use('/api/auth' , authRoutes);


const movieRoutes = require("./routes/movieRoutes")
app.use('/api/movies' , movieRoutes)

const showtimeRoutes = require('./routes/showtimeRoutes')
app.use('/api/showtimes' , showtimeRoutes)


const seatRoutes = require('./routes/seatRoutes')
app.use('/api/seats' , seatRoutes)

const reservationRoutes = require('./routes/reservationRoutes')
app.use('/api/reservations' , reservationRoutes)


const adminRoutes = require('./routes/adminRoutes')
app.use('/api/admin' , adminRoutes);


app.use((err , req , res , next) => {
    console.log(err.stack)
    res.status(500).json({ message : "Something went Wrong"})


})



const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`Server RUnning on ${PORT}`))

