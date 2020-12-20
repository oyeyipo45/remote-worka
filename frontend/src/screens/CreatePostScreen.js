import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/postActions";

const CreatePostScreen = ({ location, history }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobAvailability, setJobAvailability] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [hirerName, setHirerName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [level, setLevel] = useState("");
  const [paymentVerification, setPaymentVerification] = useState("");
  const [amountSpent, setAmountSpent] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postCreate = useSelector((state) => state.postCreate);
  const { success, post, error } = postCreate;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (success) {
      history.push(`/post/${post._id}`);
    }
  }, [dispatch, history, userInfo, redirect, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      jobTitle === "" ||
      jobAvailability === "" ||
      aboutJob === "" ||
      hirerName === "" ||
      jobLocation === "" ||
      jobType === "" ||
      jobRequirements === "" ||
      hourlyRate === "" ||
      level === "" ||
      paymentVerification === "" ||
      amountSpent === "" ||
      duration === ""
    ) {
      setMessage("Please fill all fields");
    } else {
      dispatch(
        createPost({
          jobTitle,
          jobAvailability,
          aboutJob,
          hirerName,
          jobLocation,
          jobType,
          jobRequirements,
          hourlyRate,
          level,
          paymentVerification,
          amountSpent,
          duration,
        })
      );
    }
  };

  return (
    <div className="create-post">
      <div className="customer-signin">
        <div className="customer-signin-header">
          <h3 className="customer-signin-heading">Create Job Post</h3>

          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
          {success && <p>Post Created</p>}
        </div>

        <form
          action=""
          onSubmit={submitHandler}
          className="customer-signin-form"
        >
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Job Title"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Job Availability"
              required
              value={jobAvailability}
              onChange={(e) => setJobAvailability(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="About job"
              required
              value={aboutJob}
              onChange={(e) => setAboutJob(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Hirer name"
              required
              value={hirerName}
              onChange={(e) => setHirerName(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Location"
              required
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Job Type"
              required
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Job Requirements"
              required
              value={jobRequirements}
              onChange={(e) => setJobRequirements(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="number"
              className="customer-signin-form-input"
              placeholder="Hourly Rate"
              required
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Expertise Level"
              required
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="text"
              className="customer-signin-form-input"
              placeholder="Payment Verification"
              required
              value={paymentVerification}
              onChange={(e) => setPaymentVerification(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="number"
              className="customer-signin-form-input"
              placeholder="Amount Spent"
              required
              value={amountSpent}
              onChange={(e) => setAmountSpent(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <input
              type="number"
              className="customer-signin-form-input"
              placeholder="Duration"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          <div className="customer-signin-form-group">
            <button type="submit" className="customer-signin-btn">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostScreen;
