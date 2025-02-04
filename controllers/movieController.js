const movieService = require('../services/movieService')

exports.createMovie = async (req , res ) => {
    try {
        const {title , description , genre , poster_image } = req.body;
        const movie = await movieService.createMovie(title , description , genre ,poster_image);
        res.status(201).json(movie);
        
    } catch (error) {
        res.status(400).json({message : error.message })
        
    }
}
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getMovieById = async(req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        res.status(200).json(movie);

        
    } catch (error) {
        res.status(400).json({message : "Not Found"})
    }
}

exports.updateMovie = async(req, res) => {
    try {
        const updatedMovie = await movieService.updateMovie(req.params.id , req.body)
        res.status(200).json(updatedMovie);
        
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

exports.deleteMovie = async (req, res) => {
    try {
       await movieService.deleteMovie(req.params.id);
       res.status(200).json({message : "Movie deleted Succesfully "})
    } catch (error) {

        res.status(400).json({message : error.message})
        
    }
}