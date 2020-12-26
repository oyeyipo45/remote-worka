const express = require("express");
const router = express.Router();
const {
  createBid,
  getBidById,
  acceptBid,
  completeJob,
  appliedJobs,
  declineBid,
  getAllBids,
} = require("../controllers/bidController.js");
const { protect, authorize } = require("../middleware/authMiddleware");

router.route("/").get(protect, authorize("hirer"), getAllBids);
router.route("/appliedJobs/:id").get(protect, appliedJobs);
router
  .route("/:id")
  .post(protect, authorize("freelancer"), createBid)
  .get(protect, getBidById);
router
  .route("/completed/:id")
  .put(protect, authorize("hirer", "admin"), completeJob);
//router.route("/bids/:id").get(protect, authorize("hirer"), bidedJobs);
router.route("/accept/:id").put(protect, authorize("hirer"), acceptBid);
router.route("/decline/:id").put(protect, authorize("hirer"), declineBid);

module.exports = router;
