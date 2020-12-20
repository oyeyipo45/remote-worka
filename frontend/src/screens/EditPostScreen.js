import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  editPost,
  listPostDetails,
} from "../redux/actions/postActions";
import { POST_EDIT_RESET } from "../redux/constants/postConstants";

const EditPostScreen = ({ match, location, history }) => {
  let postId = match.params.id;
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

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  const postEdit = useSelector((state) => state.postEdit);
  const { loading: EditLoading, error: editError, success } = postEdit;

  const postDelete = useSelector((state) => state.postDelete);
  const {
    success: successDelete,
    loading: loadingDelete,
    error: errorDelete,
  } = postDelete;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (successDelete) {
      history.push(redirect);
    }

    if (success) {
      dispatch({ type: POST_EDIT_RESET });
      history.push(`/post/${post._id}`);
    } else {
      if (post._id !== postId) {
        dispatch(listPostDetails(postId));
      } else {
        setJobTitle(post.jobTitle);
        setJobAvailability(post.jobAvailability);
        setAboutJob(post.aboutJob);
        setHirerName(post.hirerName);
        setJobLocation(post.jobLocation);
        setJobType(post.jobType);
        setJobRequirements(post.jobRequirements);
        setHourlyRate(post.hourlyRate);
        setLevel(post.level);
        setPaymentVerification(post.paymentVerification);
        setAmountSpent(post.amountSpent);
        setDuration(post.duration);
      }
    }
  }, [
    dispatch,
    userInfo,
    history,
    post._id,
    post.aboutJob,
    post.amountSpent,
    post.duration,
    post.hirerName,
    post.hourlyRate,
    post.jobAvailability,
    post.jobRequirements,
    post.jobTitle,
    post.jobType,
    post.jobLocation,
    post.level,
    post.paymentVerification,
    postId,
    redirect,
    success,
    successDelete,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPost(postId, {
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
  };

  const deletePostHandler = (postId) => {
    if (window.confirm("Are you sure")) {
      dispatch(deletePost(postId));
    }
  };

  return (
    <div className="create-post">
      <div className="customer-signin">
        <div className="customer-signin-header">
          <h3 className="customer-signin-heading">Edit Job Post</h3>
          <div className="bidlist-screen">
            {loadingDelete && <p> DELETING POST ...</p>}
            {successDelete && <p> {successDelete}</p>}
            {errorDelete && <p> {errorDelete}</p>}
            {EditLoading && <p> UPDATING ...</p>}
            {editError && <p>{editError}</p>}
            {loading && <p>LOADING ...</p>}
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
          </div>
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

          <div className="customer-signin-form-group post-buttons">
            <button type="submit" className="customer-signin-btn">
              Update Job Post
            </button>

            <button
              type="submit"
              className="delete-btn"
              onClick={deletePostHandler}
            >
              Delete Job Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostScreen;
