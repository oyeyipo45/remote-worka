const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')


// @desc      Register  A new user
// @route     POST /api/v1/auth/register
// @access    Private
exports.register = asyncHandler(async (req, res) => {
	try {
		const { name, email, password, role, confirmPassword } = req.body;
    
	// Validate name, email and password
	if (!name || !email || !password ||!confirmPassword) {
		return res.status(400).json({
			status: 400,
			message: 'Please Fill All Fields'
		});
	}

	if (password !== confirmPassword) {
		return res.status(400).json({
			status: 400,
			message: 'Password do not match'
		});
	}

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		email,
        password,
        role
	});

	if (user) {
		res.status(201).json({
            success: true,
            token: generateToken(user._id),
		});

	} 
	} catch (error) {
			res.status(400);
			throw new Error('Invalid user data');
		
	}
});


// @desc        Login user and get token
// @route       POST /api/auth/login
// @access      Public
exports.login = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;
		// Validate email and password
		if (!email || !password) {
			return res.status(400).json('Please provide an email and password');
		}

		const user = await User.findOne({ email });
		const isMatch = await user.matchPassword(password)

		if (user && isMatch) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
				token: generateToken(user._id),
            
			});
		}
	} catch (error) {
			res.status(401);
			throw new Error('Invalid email or password');
	}
});


// @desc    Get users by Id
// @route   GET /api/v1/users/:id
// @access  Private
exports.getUserById = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-password')
	if (user) {
		res.json(user)
	} else {
		res.status(404);
		throw new Error('User not Found');
	}
	} catch(error) {
		throw new Error(error.message)
	}
});



// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id)

	if (user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email,
		user.password =  req.body.email || updatedUser.password 

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			password: updatedUser.password
		}) 
	}
	} catch (error) { 
		res.status(404)
		throw new Error('User not found')
	}
})


// @desc 	Delete user 
// @route	Delete /api/v1/users/:id
// @access  Private
exports.deleteUsers = asyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
	if (user) {
		await user.remove()
		res.json({ message: 'User Removed' })
	} else {
		res.status(404);
		throw new Error('User not Found');
	}
	} catch (error) {
		throw new Error(error.message)
	}
});