const express = require("express");
const movieController = require("../controllers/movieController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();




router.get("/", movieController.getAllMovies);
router.post("/", protect, isAdmin, movieController.createMovie);
router.get("/:id", movieController.getMovieById);
router.put("/:id", protect, isAdmin, movieController.updateMovie);
router.delete("/:id", protect, isAdmin, movieController.deleteMovie);

module.exports = router;
