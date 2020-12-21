import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  listBidDetails,
  acceptBid,
  declineBid,
  markJobAsCompleted,
} from "../redux/actions/bidActions";
import { listPostDetails } from "../redux/actions/postActions";

const BidDetails = ({ history, location, match }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading: userInfoLoading } = userLogin;
  console.log(userInfo);
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const bidDetails = useSelector((state) => state.bidDetails);
  const { loading, error, bid } = bidDetails;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading: loadingPost, post } = postDetails;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (!userInfo._id && !user) {
      history.push("/login");
    }

    dispatch(listBidDetails(match.params.id));
    dispatch(listPostDetails(bid.post));
  }, [
    dispatch,
    userInfo,
    match,
    history,
    redirect,
    user,
    bid.post,
    bid.response,
  ]);

  const acceptBidHandler = () => {
    dispatch(acceptBid(bid._id, ""));
    dispatch(listBidDetails(match.params.id));
  };

  const declineBidHandler = () => {
    dispatch(declineBid(bid._id, ""));
    dispatch(listBidDetails(match.params.id));
  };

  const jobCompletedHandler = () => {
    dispatch(markJobAsCompleted(bid._id, ""));
    dispatch(listBidDetails(match.params.id));
    console.log("good");
  };
  return (
    <>
      <div className="post-details-heading">
        <Link className="link-back" to="/">
          Go Back
        </Link>
        {userInfoLoading && loadingPost ? (
          <div className="bidlist-screen">
            <p>{userInfoLoading}</p> <p>{loadingPost}</p>
          </div>
        ) : error ? (
          <div className="bidlist-screen">
            {" "}
            <p>{error}</p>{" "}
          </div>
        ) : userInfo._id === post.user && bid.response === "pending" ? (
          <div className="bid-choice">
            <button className="accept-btn" onClick={acceptBidHandler}>
              Accept Bid
            </button>
            <button className="delete-btn" onClick={declineBidHandler}>
              Decline Bid
            </button>
          </div>
        ) : (
          <div>
            {bid.response === "accept" ? (
              <p className="color-green">BID ACCEPTED</p>
            ) : bid.response === "pending" ? (
              <p className="color-Penging"> BID PENDING </p>
            ) : (
              <p className="color-red"> BID DECLINED </p>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <p> LOADING ... </p>
      ) : error ? (
        <p>ERROR ..... </p>
      ) : (
        <section className="job ">
          <div className="container-sm">
            <div className="job-details">
              <div className="company__details">
                <div className="company__name">
                  <h2> Job posted by {post.hirerName}</h2>
                </div>
              </div>

              <div className="job-details__post">
                <div className="job-title">
                  <h2>{post.jobTitle}</h2>
                </div>
                <p>{post.location}</p>
                <div>
                  {" "}
                  {bid.response === "accept" ? (
                    <p className="color-red">Job Closed</p>
                  ) : (
                    <p className="color-green">Job Open </p>
                  )}
                </div>
              </div>

              <article className="job-details__description">
                <div className="mb-2">
                  <h5>Proposal Details</h5>
                  {bid.proposalDetails}
                </div>

                <div className="mb-2">
                  <h5>Bid Price</h5>
                  {bid.bidPrice}
                </div>

                <div className="mb-2">
                  <h5>Bid Price</h5>
                  {bid.completed ? (
                    <p style={{ color: "green" }}>Job Completed</p>
                  ) : (
                    <button
                      className="accept-btn"
                      onClick={jobCompletedHandler}
                    >
                      Mark Completed
                    </button>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BidDetails;
