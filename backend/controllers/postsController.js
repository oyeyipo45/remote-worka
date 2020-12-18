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
			jobTitle,
			jobAvailability,
			companyName,
			companyLogo,
			companyWebsite,
			location,
			jobType,
			modeOfExecution,
			aboutUs,
			theRole,
			youAre,
			jobRequirements,
			niceToHave,
			benefits,
			ourValues,
			howToApply,
		} = req.body;
	
		if (
			!jobTitle ||
			!companyName ||
			!companyWebsite ||
			!location ||
			!jobType ||
			!jobRequirements ||
			!benefits ||
			!howToApply ||
			!jobAvailability
		) {
			throw new Error('Fill all fields');
		} else {
			const post = new Post({
				user: req.user._id,
				jobTitle,
				companyName,
				companyLogo,
				companyWebsite,
				location,
				jobType,
				modeOfExecution,
				aboutUs,
				theRole,
				youAre,
				jobRequirements,
				niceToHave,
				benefits,
				ourValues,
				howToApply,
				jobAvailability,
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
		throw new Error(`User ${req.params.id} is not authorized to update this  job post`)
	}
	if (post) {
		(post.user = req.user._id || post.user),
			(post.jobTitle = req.body.jobTitle || post.jobTitle),
			(post.companyName = req.body.companyName || post.companyName),
			(post.companyLogo = req.body.companyLogo || post.companyLogo),
			(post.companyWebsite = req.body.companyWebsite || post.companyWebsite),
			(post.location = req.body.location || post.location),
			(post.jobType = req.body.jobType || post.jobType),
			(post.modeOfExecution = req.body.modeOfExecution || post.modeOfExecution),
			(post.aboutUs = req.body.aboutUs || post.aboutUs),
			(post.theRole = req.body.theRole || post.theRole),
			(post.youAre = req.body.youAre || post.youAre),
			(post.jobRequirements = req.body.jobRequirements || post.jobRequirements),
			(post.niceToHave = req.body.niceToHave || post.niceToHave),
			(post.benefits = req.body.benefits || post.benefits),
			(post.ourValues = req.body.ourValues || post.ourValues),
			(post.howToApply = req.body.howToApply || post.howToApply),
			(post.jobAvailability = req.body.jobAvailability || post.jobAvailability);

		const updatedPost = await post.save();

		res.status(200).json({
			jobTitle: updatedPost.jobTitle,
			companyName: updatedPost.companyName,
			companyLogo: updatedPost.companyLogo,
			companyWebsite: updatedPost.companyWebsite,
			location: updatedPost.location,
			jobType: updatedPost.jobType,
			modeOfExecution: updatedPost.modeOfExecution,
			aboutUs: updatedPost.aboutUs,
			theRole: updatedPost.theRole,
			youAre: updatedPost.youAre,
			jobRequirements: updatedPost.jobRequirements,
			niceToHave: updatedPost.niceToHave,
			benefits: updatedPost.benefits,
			ourValues: updatedPost.ourValues,
			howToApply: updatedPost.howToApply,
			jobAvailability: updatedPost.jobAvailability,
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
			throw new Error(`User ${req.params.id} is not authorized to delete this  job post`)
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
