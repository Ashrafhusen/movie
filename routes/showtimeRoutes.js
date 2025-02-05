const express = require("express");
const {
  createShowtime,
  getAllShowtimes,
  getShowtimeById,
  updateShowtime,
  deleteShowtime
} = require("../controllers/showtimeController"); // ✅ Make sure this path is correct

const { protect, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// Ensure all controller functions exist
if (!createShowtime || !getAllShowtimes || !getShowtimeById || !updateShowtime || !deleteShowtime) {
  throw new Error("One or more showtime controller functions are undefined. Check your imports!");
}

// Define routes
router.get("/", getAllShowtimes);
router.post("/", protect, isAdmin, createShowtime);
router.get("/:id", getShowtimeById);
router.put("/:id", protect, isAdmin, updateShowtime);
router.delete("/:id", protect, isAdmin, deleteShowtime);

module.exports = router;
