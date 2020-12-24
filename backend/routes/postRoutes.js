const express = require("express");
const router = express.Router();

const {
  getPostById,
  getPosts,
  addPost,
  deletePosts,
  updatePosts,
} = require("../controllers/postsController.js");
const { authorize } = require("../middleware/authMiddleware");

router.route("/").get(getPosts);
router.route("/:id").get(getPostById);
router.route("/").post(authorize("hirer", "admin"), addPost);
router
  .route("/:id")
  .get(getPostById)
  .put(authorize("hirer", "admin"), updatePosts)
  .delete(authorize("hirer", "admin"), deletePosts);

module.exports = router;
