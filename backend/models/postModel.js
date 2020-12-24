const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobAvailability: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected"],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  aboutJob: {
    type: String,
    required: [true, "Enter job details"],
  },
  hirerName: {
    type: String,
    required: true,
  },
  durationFromDataPosted: {
    type: Date,
    default: Date.now,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Remote", "Fulltime Onsite"],
    required: [true, "Enter Job Type"],
  },

  jobRequirements: {
    type: Array,
    required: true,
  },
  hourlyRate: {
    type: Number,
    default: 0.0,
    required: [true, "Enter hourly rate"],
  },
  level: {
    type: String,
    enum: ["Entry level", "intermidiate", "expert"],
    required: [true, "Enter Level of expertise"],
  },

  paymentVerification: {
    type: String,
    enum: ["true", "false"],
    required: [true, "Enter Verifacation Status"],
  },
  amountSpent: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
