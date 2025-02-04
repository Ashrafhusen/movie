const express = require('express')

const authController = require("../controllers/authController");

const { protect } = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/signup' , authController.signup)
router.post('/login' , authController.login)

router.get('/profile' , protect , (req, res) => {
    res.json({user : req.user});
});

module.exports = router;
