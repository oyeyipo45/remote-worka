const express = require("express");
const {
  register,
  login,
  getUserById,
  deleteUsers,
  updateUser,
} = require("../controllers/authController.js");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router
  .route("/:id")
  .delete(protect, deleteUsers)
  .get(protect, getUserById)
  .put(protect, updateUser);

module.exports = router;
