import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BidList from "../components/BidList";
import { placedBids } from "../redux/actions/bidActions";

const PlacedBidsScreen = ({ match, history }) => {
  const userId = match.params.id;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const placedBidsList = useSelector((state) => state.placedBidsList);
  const { bids, loading, error } = placedBidsList;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    dispatch(placedBids(userId));
  }, [dispatch, userId, history, userInfo]);
  return loading ? (
    <p className="topp"> LOADING ... </p>
  ) : error ? (
    <p className="topp">{error}</p>
  ) : (
    <div className="topp">
      {bids.length === 0 ? (
        <div className="bidlist-screen">
          <p>you have no placed Bids Freelancer</p>
        </div>
      ) : (
        bids.map((bid) => (
          <div key={bid._id}>
            <BidList bid={bid} />
          </div>
        ))
      )}
    </div>
  );
};

export default PlacedBidsScreen;
