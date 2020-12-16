const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')


// @desc      Register  A new user
// @route     POST /api/v1/auth/register
// @access    Private
exports.register = asyncHandler(async (req, res) => {
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

	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});


// @desc        Login user and get token
// @route       POST /api/auth/login
// @access      Public
exports.login = asyncHandler(async (req, res) => {
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
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});