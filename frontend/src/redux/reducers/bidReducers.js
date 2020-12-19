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
	BID_EDIT_REQUEST,
	BID_EDIT_SUCCESS,
	BID_EDIT_FAIL,
	BID_EDIT_RESET
} from '../constants/bidConstants';

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
				bid: action.payload
			};
		case BID_CREATE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const bidEditReducer = (state = {}, action) => {
	switch (action.type) {
		case BID_EDIT_REQUEST:
			return { loading: true };
		case BID_EDIT_SUCCESS:
			return { loading: false, bid: action.payload, success: true };
		case BID_EDIT_FAIL:
			return { loading: false, error: action.payload };
		case BID_EDIT_RESET:
			return {bid : {}};
		default:
			return state;
	}
};


