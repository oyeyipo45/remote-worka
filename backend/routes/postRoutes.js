const  express = require('express');
const  {getPostById, getPosts} = require('../controllers/postsController.js')
const router = express.Router();




router.route('/').get(getPosts);
router.route('/:id',).get(getPostById)


module.exports = router;
