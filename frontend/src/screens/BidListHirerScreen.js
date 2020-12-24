import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BidListHirer from "../components/BidListHirer";
import { listBids } from "../redux/actions/bidActions";

const BidsListHirerScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bidsList = useSelector((state) => state.bidsList);
  const { bids, loading, error } = bidsList;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!bids) {
      dispatch(listBids());
    }
  }, [dispatch, history, userInfo, bids]);
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
        bids.map((bid, userInfo) => (
          <div key={bid._id}>
            <BidListHirer bid={bid} />
          </div>
        ))
      )}
    </>
  );
};

export default BidsListHirerScreen;
