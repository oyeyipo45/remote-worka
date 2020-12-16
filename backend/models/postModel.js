const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		jobTitle: {
			type: String,
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		companyLogo: {
			type: String,
		},
		durationFromDataPosted: {
			type: Date,
            default: Date.now()
		},
		companyWebsite: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		jobType: {
			type: String,
			required: true,
        },
		aboutUs: {
			type: String,
		},
		youAre: {
			type: Array,
		},

		jobRequirements: {
			type: Array,
			required: true,
		},
		niceToHave: {
			type: Array,
		},
		benefits: {
			type: Array,
			required: true,
		},
		howToApply: {
			type: String,
			required: true,
		},
        jobAvailability: {
            type: Boolean,
            default: true,
            required: true
		},
		createdAt: {
			type: Date,
			default: Date.now
		}
		
	}
);

const Post = mongoose.model('Post', postSchema);

module.exports =Post;
