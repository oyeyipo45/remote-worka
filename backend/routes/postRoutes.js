const  express = require('express');
const  {getPostById, getPosts, addPost, deletePosts, updatePosts} = require('../controllers/postsController.js')
const router = express.Router();
const {protect, authorize} = require ("../middleware/authMiddleware")



router.route('/').get(getPosts);
router.route('/:id').get( getPostById)
router.route('/').post(protect, authorize('hirer', 'admin'), addPost)
router.route('/:id').get(getPostById).put(protect, authorize('hirer', 'admin'),updatePosts).delete(protect, authorize('hirer', 'admin'),deletePosts)



module.exports = router;
