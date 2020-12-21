import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listPostDetails } from "../redux/actions/postActions";

const PostScreen = ({ history, location, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (!userInfo && !user) {
      history.push("/login");
    }

    dispatch(listPostDetails(match.params.id));
  }, [dispatch, userInfo, match, history, user, redirect]);

  return (
    <>
      <div className="post-details-heading">
        <Link className="link-back" to="/">
          Go Back To Home
        </Link>
        <p>OO</p>
      </div>

      {loading ? (
        <div className="bidlist-screen">
          <p> LOADING ... </p>
        </div>
      ) : error ? (
        <div className="bidlist-screen">
          {" "}
          <p>ERROR ..... </p>
        </div>
      ) : (
        <section className="job ">
          <div className="container-sm">
            <div className="job-details">
              <div className="company__details">
                <div className="company__name">
                  <h2> Job posted by {post.hirerName}</h2>
                </div>
              </div>
              <div className="job-details__time">
                <p className="posted">3d ago</p>
                <p className="dot">·</p>
                <p className="time">{post.jobType}</p>
              </div>
              <div className="job-details__post">
                <div className="job-title">
                  <h2>{post.jobTitle}</h2>
                </div>
                <p>{post.location}</p>
                <div>
                  {" "}
                  {post.jobAvailability === "pending" ? (
                    <p style={{ color: "green" }}>Job Open</p>
                  ) : (
                    <p style={{ color: "red" }}> Job Closed </p>
                  )}
                </div>
              </div>
              <article className="job-details__description">
                <div className="mb-2">
                  <h5>About Job</h5>
                  {post.aboutJob}
                </div>

                <div className="mb-2">
                  <h5>Requirements</h5>
                  {/* {post.jobRequirements.map((req) => (
                    <div key={post._id}> {req} </div>
                  ))} */}
                </div>
                <div className="mb-2">
                  <h5>Hourly Rate</h5>${post.hourlyRate} Per Hour
                </div>
                <div className="mb-2">
                  <h5>Payment Verification</h5>
                  {post.paymentVerification ? (
                    <p style={{ color: "green" }}>Verified</p>
                  ) : (
                    <p style={{ color: "red" }}>Not Verified</p>
                  )}
                </div>
                <div className="mb-2">
                  <h5>Level</h5>
                  {post.level} Level
                </div>
                <div className="mb-2">
                  <h5>Duration</h5>
                  {post.duration} Weeks
                </div>
                <div className="mb-2">
                  <h5>Job posted at</h5>
                  {post.createdAt}
                </div>
              </article>
            </div>
            <div className="how-to-apply">
              {post.jobAvailability === "pending" ? (
                <Link to={`/proposal/${post._id}`}>
                  <h2>Submit Proposal</h2>{" "}
                </Link>
              ) : (
                <p>closed</p>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostScreen;
