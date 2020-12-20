import {
  BID_DETAILS_SUCCESS,
  BID_DETAILS_REQUEST,
  BID_LIST_REQUEST,
  BID_LIST_SUCCESS,
  BID_LIST_FAIL,
  BID_DETAILS_FAIL,
  BID_CREATE_REQUEST,
  BID_CREATE_SUCCESS,
  BID_CREATE_FAIL,
  BID_ACCEPT_REQUEST,
  BID_ACCEPT_SUCCESS,
  BID_ACCEPT_FAIL,
  BID_ACCEPT_RESET,
  BID_DECLINE_REQUEST,
  BID_DECLINE_SUCCESS,
  BID_DECLINE_FAIL,
  BID_DECLINE_RESET,
  BID_MADE_LIST_SUCCESS,
  BID_MADE_LIST_FAIL,
  BID_MADE_LIST_REQUEST,
  JOB_COMPLETED_SUCCESS,
  JOB_COMPLETED_FAIL,
  JOB_COMPLETED_REQUEST,
  JOB_COMPLETED_RESET,
} from "../constants/bidConstants";

export const bidListReducer = (state = { bids: [] }, action) => {
  switch (action.type) {
    case BID_LIST_REQUEST:
      return { loading: true, bids: [] };
    case BID_LIST_SUCCESS:
      return { loading: false, bids: action.payload };
    case BID_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const placedBidsListReducer = (state = { bids: [] }, action) => {
  switch (action.type) {
    case BID_MADE_LIST_REQUEST:
      return { loading: true, bids: [] };
    case BID_MADE_LIST_SUCCESS:
      return { loading: false, bids: action.payload };
    case BID_MADE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bidDetailsReducer = (state = { bid: {} }, action) => {
  switch (action.type) {
    case BID_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BID_DETAILS_SUCCESS:
      return { loading: false, bid: action.payload };
    case BID_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bidCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BID_CREATE_REQUEST:
      return { loading: true };
    case BID_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bid: action.payload,
      };
    case BID_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bidAcceptReducer = (state = {}, action) => {
  switch (action.type) {
    case BID_ACCEPT_REQUEST:
      return { loading: true };
    case BID_ACCEPT_SUCCESS:
      return { loading: false, bid: action.payload, success: true };
    case BID_ACCEPT_FAIL:
      return { loading: false, error: action.payload };
    case BID_ACCEPT_RESET:
      return { bid: {} };
    default:
      return state;
  }
};

export const bidDecliineReducer = (state = {}, action) => {
  switch (action.type) {
    case BID_DECLINE_REQUEST:
      return { loading: true };
    case BID_DECLINE_SUCCESS:
      return { loading: false, bid: action.payload, success: true };
    case BID_DECLINE_FAIL:
      return { loading: false, error: action.payload };
    case BID_DECLINE_RESET:
      return { bid: {} };
    default:
      return state;
  }
};

export const jobCompletedReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_COMPLETED_REQUEST:
      return { loading: true };
    case JOB_COMPLETED_SUCCESS:
      return { loading: false, job: action.payload, success: true };
    case JOB_COMPLETED_FAIL:
      return { loading: false, error: action.payload };
    case JOB_COMPLETED_RESET:
      return { bid: {} };
    default:
      return state;
  }
};
