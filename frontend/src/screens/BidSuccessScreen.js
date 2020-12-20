import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BidSuccessScreen = () => {
  const bidCreate = useSelector((state) => state.bidCreate);
  const { success, error } = bidCreate;
  console.log(success);
  return (
    <div class="cover">
      <div> bid was successful </div>
    </div>
  );
};

export default BidSuccessScreen;
