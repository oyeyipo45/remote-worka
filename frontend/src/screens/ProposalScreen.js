import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBid, listBids } from "../redux/actions/bidActions";
import { listPostDetails } from "../redux/actions/postActions";

const ProposalScreen = ({ match, location, history }) => {
  const postId = match.params.id;
  const [proposalDetails, setProposalDetails] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [message, setMessage] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bidCreate = useSelector((state) => state.bidCreate);
  const { success, error } = bidCreate;

  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;
  const jobTitle = post.jobTitle;
  const jobLocation = post.jobLocation;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPostDetails(postId));
    if (!userInfo) {
      history.push("/login");
    }
    if (success) {
      alert("YOUR BID WAS SUCCESSFUL");
      history.push(`/`);
    }
  }, [dispatch, history, userInfo, success, redirect, postId]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (bidPrice === "" || proposalDetails === "") {
      setMessage("Please fill all fields");
    } else {
      const bid = { bidPrice, proposalDetails, jobLocation, jobTitle };
      dispatch(createBid(postId, bid));
      dispatch(listBids(userInfo._id));
    }
  };
  return (
    <div className="login">
      <div className="customer-signin">
        <div className="customer-signin-header">
          <h3 className="customer-signin-heading">
            Enter your proposal details below
          </h3>

          {error && <p className="color-red">{error}</p>}
          {success && <p className="color-green">Bid Submitted</p>}
          {message && <p>{message}</p>}
        </div>

        <form
          action=""
          onSubmit={submitHandler}
          className="customer-signin-form"
        >
          <label className="proposal-heading">Proposal Details</label>
          <div className="proposal-form-group">
            <textarea
              col="20"
              row="50"
              className="customer-signin-form-input"
              value={proposalDetails}
              onChange={(e) => setProposalDetails(e.target.value)}
              placeholder="Enter proposal details here"
            ></textarea>
          </div>
          <label className="proposal-heading">Bid Price</label>
          <div className="proposal-form-group">
            <input
              type="number"
              className="customer-signin-form-input"
              placeholder="Bid Price"
              required
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
            />
          </div>
          <div className="customer-signin-form-group">
            <button type="submit" className="customer-signin-btn">
              Place Bid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposalScreen;
