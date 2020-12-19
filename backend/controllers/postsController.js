const Post = require('../models/postModel.js')
const asyncHandler = require('express-async-handler')


// @desc 	Fetch All Posts
// @route 	GET /api/v1/posts
// @access 	Public
exports.getPosts = asyncHandler(async (req, res) => {
    
    try {
		const posts = await Post.find(req.query);
		res.json({
		posts
        })
		
	} catch (error) {
		console.log(error.message);
	}
	
});


// @desc 	Find post by Id
// @route 	GET /api/v1/posts/:id
// @access 	Public
exports.getPostById = asyncHandler(async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
	if (post) {
		res.json(post);
	} else {
		res.status(404).json({message: "Post Not Found"})
		throw new Error('Post Not Found');
	}
	} catch (error) {
		console.log(error.message);
	}
});







// @desc     Create new Post
// @route    POST /api/v1/posts
// @access   Private
exports.addPost = asyncHandler(async (req, res) => {
	try {
		const {
			jobTitle, jobAvailability,aboutJob,hirerName,jobLocation,jobType,jobRequirements,hourlyRate,level,paymentVerification,amountSpent,duration
		} = req.body;
	
		if (
			!jobTitle|| !jobAvailability|| !aboutJob|| !hirerName|| !jobLocation|| !jobType|| !jobRequirements|| !hourlyRate|| !level|| !paymentVerification|| !amountSpent|| !duration
		) {
			throw new Error('Fill all fields');
		} else {
			const post = new Post({
				user: req.user._id,
				jobTitle, jobAvailability,aboutJob,hirerName,jobLocation,jobType,jobRequirements,hourlyRate,level,paymentVerification,amountSpent,duration
			});
	
			const createdPost = await post.save();
			res.status(201).json(createdPost);
		}
	} catch (error) {
		throw new Error(error.message)
	}
});



// @desc      Update posts
// @route     PUT /api/v1/users/posts
// @access    Private
exports.updatePosts = asyncHandler(async (req, res) => {
	try {
		
		
		const post = await Post.findById(req.params.id);
		
		if (post.user.toString() !== req.user.id && req.user.role !== 'admin') {
		res.status(401)
		throw new Error(`User not authorized to update this job post`)
	}
	if (post) {
		(post.user = req.user._id || post.user),
			(post.jobTitle = req.body.jobTitle || post.jobTitle),
			(post.companyName = req.body.companyName || post.companyName),
			(post.companyLogo = req.body.companyLogo || post.companyLogo),
			(post.companyWebsite = req.body.companyWebsite || post.companyWebsite),
			(post.location = req.body.location || post.location),
			(jobTitle = req.body.jobTitle   ||  post.jobTitle),
			(jobAvailability = req.body. jobAvailability  ||  post.jobAvailability),
			(aboutJob = req.body.aboutJob  ||  post.aboutJob),
			(hirerName = req.body.hirerName   ||  post.hirerName),
			(jobLocation = req.body.jobLocation   ||  post.jobLocation),
			(jobType = req.body.jobType   ||  post.jobType),
			(jobRequirements = req.body.jobRequirements   ||  post.jobRequirements),
			(hourlyRate = req.body.hourlyRate   ||  post.hourlyRate),
			(level = req.body.level   ||  post.level),
			(paymentVerification = req.body.paymentVerification   ||  post.paymentVerification),
			(amountSpent = req.body.amountSpent   ||  post.amountSpent),
			(duration = req.body.duration   ||  post.duration)

		const updatedPost = await post.save();

		res.status(200).json({
			_id: req.params.id,
			jobTitle: updatedPost.jobTitle,
			jobAvailability: updatedPost.jobAvailability,
			aboutJob: updatedPost.aboutJob,
			hirerName: updatedPost.hirerName,
			jobLocation: updatedPost.jobLocation,
			jobType: updatedPost.jobType,
			jobRequirements: updatedPost.jobRequirements,
			hourlyRate: updatedPost.hourlyRate,
			level: updatedPost.level,
			paymentVerification: updatedPost.paymentVerification,
			amountSpent: updatedPost.amountSpent,
			duration: updatedPost.duration
		});
	} else {
		res.status(404);
		throw new Error('Post cannot be Updated');
	}
	} catch (error) {
		throw new Error(error.message)
	}
});



// @desc      Delete Post
// @route     DELETE /api/v1/posts/
// @access    Private
exports.deletePosts = asyncHandler(async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.user.toString() !== req.user.id && req.user.role !== 'admin') {
			res.status(401)
			throw new Error(`User not authorized to delete this  job post`)
		}
	if (post) {
		await post.remove()
		res.status(200).json({message : "Post Deleted"});
	} else {
		res.status(404);
		throw new Error('Post Not Found');
	}
	} catch (error) {
		throw new Error(error.message)
	}
});
