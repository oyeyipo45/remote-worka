const mongoose = require("mongoose");

const bidSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  bidPrice: {
    type: Number,
    required: [true, "Please enter valid Bid "],
    default: 0.0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: {},
    required: true,
  },
  response: {
    type: String,
    enum: ["accept", "pending", "decline"],
    default: "pending",
  },
  completed: {
    type: Boolean,
    default: "false",
  },
  proposalDetails: {
    type: String,
    required: [true, "Enter your proposal details"],
  },
  jobLocation: {
    type: String,
    required: [true, "Enter your job Location"],
  },
  jobTitle: {
    type: String,
    required: [true, "Enter your job title"],
  },
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;
