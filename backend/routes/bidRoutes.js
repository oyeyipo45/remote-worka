const  express = require('express');
const { createBid, getBidById, acceptBid, completeJob, appliedJobs} = require('../controllers/bidController.js');
const {protect, authorize} = require ("../middleware/authMiddleware")
const router = express.Router();


router.route('/applied/:id').get(protect, authorize('freelancer', 'admin'),appliedJobs)
router.route('/:id').post(protect, authorize('freelancer'), createBid).get(protect, authorize('hirer'), getBidById).put(protect, authorize('hirer'), acceptBid)
router.route('/completed/:id').put(protect, authorize('hirer', 'admin'), completeJob)



module.exports = router;
