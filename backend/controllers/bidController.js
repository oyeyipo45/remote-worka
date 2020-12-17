const Bid = require('../models/postModel.js')
const asyncHandler = require('express-async-handler')





// @desc 	Create bid
// @route	Post /api/v1/bids
// @access  Private
exports.createBid = asyncHandler(async( req, res) => {  
    try {
        const post = req.params.id
        const { bidPrice } = req.body
    
    if (!bidPrice) {
        return res.status(400).json({
			status: 400,
			message: 'Please Fill All Fields'
		});
    } else {
        const bid = new Bid({
            user: req.user._id,
            bidPrice,
            post
        })

        const placedBid = await bid.save();
        res.status(201).json({
            message: "Success", placedBid
        })
    }
    } catch (error) {
        throw new Error(error.message)
    }
})


// // @desc 	Get Bid Id
// // @route 	GET /api/v1/posts/:id
// // @access 	Public
// exports.getBidById = asyncHandler(async (req, res) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 	if (post) {
// 		res.json(post);
// 	} else {
// 		res.status(404).json({message: "Post Not Found"})
// 		throw new Error('Post Not Found');
// 	}
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// });
