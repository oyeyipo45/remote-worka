import {
  BID_LIST_REQUEST,
  BID_LIST_SUCCESS,
  BID_LIST_FAIL,
  BID_DETAILS_REQUEST,
  BID_DETAILS_SUCCESS,
  BID_DETAILS_FAIL,
  BID_CREATE_REQUEST,
  BID_CREATE_SUCCESS,
  BID_CREATE_FAIL,
  BID_ACCEPT_REQUEST,
  BID_ACCEPT_SUCCESS,
  BID_ACCEPT_FAIL,
  BID_DECLINE_REQUEST,
  BID_DECLINE_SUCCESS,
  BID_DECLINE_FAIL,
  BID_MADE_LIST_REQUEST,
  BID_MADE_LIST_SUCCESS,
  BID_MADE_LIST_FAIL,
  JOB_COMPLETED_REQUEST,
  JOB_COMPLETED_SUCCESS,
  JOB_COMPLETED_FAIL,
} from "../constants/bidConstants";
import axios from "axios";

//hirer bids
export const listBids = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BID_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/bids`, config);

    dispatch({ type: BID_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BID_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//bids freelancer
export const placedBids = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BID_MADE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/bids/appliedJobs/${id}`, config);

    dispatch({ type: BID_MADE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BID_MADE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listBidDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BID_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/v1/bids/${id}`, config);

    dispatch({ type: BID_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BID_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBid = (post, bid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BID_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/bids/${post}`, bid, config);

    dispatch({
      type: BID_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BID_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const acceptBid = (id, bid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BID_ACCEPT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/v1/bids/accept/${id}`, bid, config);

    dispatch({
      type: BID_ACCEPT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BID_ACCEPT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const declineBid = (id, bid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BID_DECLINE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/v1/bids/decline/${id}`, bid, config);

    dispatch({
      type: BID_DECLINE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BID_DECLINE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const markJobAsCompleted = (id, bid) => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOB_COMPLETED_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/v1/bids/completed/${id}`,
      bid,
      config
    );

    dispatch({
      type: JOB_COMPLETED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_COMPLETED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
