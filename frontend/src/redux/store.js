import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { postListReducer, postDetailsReducer, postCreateReducer, postEditReducer, postDeleteReducer } from './reducers/postReducers';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
	userDeleteReducer,
	userUpdateReducer,
} from './reducers/userReducers';
import { bidCreateReducer, bidDetailsReducer, bidEditReducer, bidListReducer } from './reducers/bidReducers';


const reducer = combineReducers({
	postsList: postListReducer,
	postEdit: postEditReducer,
	postCreate: postCreateReducer,
	postDetails: postDetailsReducer,
	postDelete: postDeleteReducer,
	bidsList: bidListReducer,
	bidEdit: bidEditReducer,
	bidCreate: bidCreateReducer,
	bidDetails: bidDetailsReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
