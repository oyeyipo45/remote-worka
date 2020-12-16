const Post = require('../models/postModel.js')
const asyncHandler = require('express-async-handler')



// @desc Fetch All Posts
// @route GET /api/v1/posts
// @access Public
exports.getPosts = asyncHandler(async (req, res) => {
    console.log(req.query)
    try {
		const posts = await Post.find(req.query);
		res.json({
		posts : posts,
        message: "All Posts available",
        })
		
	} catch (error) {
		console.log(error.message);
	}
	
});

// @desc Fetch one Post
// @route GET /api/v1/posts/:id
// @access Public
exports.getPostById = asyncHandler(async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
	if (post) {
		res.json(post);
	} else {
		res.status(404);
		throw new Error('Post Not Found');
	}
	} catch (error) {
		console.log(error.message);
	}
});

