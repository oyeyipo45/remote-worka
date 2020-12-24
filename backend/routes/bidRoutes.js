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
const { authorize } = require("../middleware/authMiddleware");

router.route("/").get(authorize("hirer"), getAllBids);
router.route("/appliedJobs/:id").get(appliedJobs);
router.route("/:id").post(authorize("freelancer"), createBid).get(getBidById);
router.route("/completed/:id").put(authorize("hirer", "admin"), completeJob);
router.route("/accept/:id").put(authorize("hirer"), acceptBid);
router.route("/decline/:id").put(authorize("hirer"), declineBid);

module.exports = router;
