const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add an name'],
		},
		email: {
			type: String,
			required: [true, 'Please add a valid email'],
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
			minlength: 6
		},
		role: {
			type: String,
			enum: ['freelancer', 'hirer'],
			default: 'user'
		},
		createdAt: {
			type: Date,
			default: Date.now
		}
	}
	
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};


//encrypting password with bcrypt
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt); 
});

module.exports = mongoose.model('User', userSchema);

