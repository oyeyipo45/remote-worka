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
	BID_EDIT_REQUEST,
	BID_EDIT_SUCCESS,
	BID_EDIT_FAIL,
} from '../constants/bidConstants';
import axios from 'axios';


export const listbids = () => async (dispatch) => {
	try {
		dispatch({ type: BID_LIST_REQUEST });

		const { data } = await axios.get('/api/v1/bids');
		console.log(data);
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

export const listBidDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: BID_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/v1/bidss/${id}`);
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


export const createBid = (bid) => async (
	dispatch, getState
) => {
	try {
		console.log("reachng")
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

		console.log(bid )
		const { data } = await axios.post(
			`/api/v1/bids`,
			bid  ,
			config
		);
		console.log(data)

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



export const editBid = (id, bid) => async (
	dispatch, getState
) => {
	try {
		dispatch({
			type: BID_EDIT_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		console.log(bid )
		const { data } = await axios.put(
			`/api/v1/bids/${id}`,
			bid,
			config
		);
		console.log(data)

		dispatch({
			type: BID_EDIT_SUCCESS,
			payload: data,
		});

	} catch (error) {
		dispatch({
			type: BID_EDIT_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};