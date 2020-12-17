import mongoose from 'mongoose';

const bidSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		bidPrice: {
			type: Number,
			required: [true, 'Please enter valid Bid '],
			default: 0.0,
		},
        createdAt: {
            type: Date,
            default: Date.now
        },
        post: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Post',
        },
        response: {
            type: String,
            default: decline,
            enum: ['accept', 'decline']
        },
        bids: [{
            bidder: {type: mongoose.Schema.ObjectId, ref: 'User'},
            bid: Number,
            time: Date
          }]
	}
);

const Bid = mongoose.model('Bid', bidSchema);

export default Bid;