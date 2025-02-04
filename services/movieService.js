const Movie = require('../models/Movie')

exports.createMovie = async (title , description  , genre , posterImage) => {
    return await Movie.create({title , description  , genre , posterImage : posterImage})
}


exports.getAllMovies = async () => {
    return await Movie.find();
}

exports.getMovieById = async(movieId) => {
    return await Movie.findById(movieId);
}

exports.updateMovie = async (movieId , updateData) => {
    return await Movie.findByIdAndUpdate(movieId , updateData , {new : true})
};

exports.deleteMovie = async (movieId) => {
    return await Movie.findByIdAndDelete(movieId);
};

