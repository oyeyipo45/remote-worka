const  express = require('express');
const { createBid} = require('../controllers/bidController.js');
const {protect, authorize} = require ("../middleware/authMiddleware")
const router = express.Router();



router.route('/:id').post(protect, authorize('freelancer'), createBid);


module.exports = router;
