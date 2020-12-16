const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
	{
		jobName: {
			type: String,
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		companyLogo: {
			type: String,
			required: true,
		},
		jobDuration: {
			type: String,
			required: true,
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
        jobAvailability: {
            type: Boolean,
            default: true,
            required: true
        },
		jobRequirements: {
			mainRequirement: { type: String, required: true },
			requirementList: [{ required: true, type:String }],
		},
		whatWillYouDo: {
			jobDetails: { type: String, required: true },
			whatWillYouDoList: [{ required: true, type:String }],
		},
		howToApply: {
			applicationDetails: { type: String, required: true },
			applicationLink: { type: String, required: true },
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
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
