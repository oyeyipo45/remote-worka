import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BidList from "../components/BidList";
import { listBids } from "../redux/actions/bidActions";

const BidsListScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bidsList = useSelector((state) => state.bidsList);
  const { bids, loading, error } = bidsList;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bids) {
      dispatch(listBids());
    }
  }, [dispatch, userInfo._id, bids]);
  return loading ? (
    <p className="bidlist-screen"> LOADING ... </p>
  ) : error ? (
    <p className="bidlist-screen">{error}</p>
  ) : (
    <>
      {bids.length === 0 ? (
        <div className="bidlist-screen">
          <h1>You have no bids Hirer</h1>
        </div>
      ) : (
        bids.map((bid) => (
          <div key={bid._id}>
            <BidList bid={bid} />
          </div>
        ))
      )}
    </>
  );
};

export default BidsListScreen;
