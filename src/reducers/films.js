import { GET_FILMS_RES, GET_FILMS_REQ, GET_FILMS_ERR, GET_SERCH_FILMS_RES } from '../constants';

const initState = {
	films: [],
	loaded: false,
	errors: [],

	single: null,
	single_loaded: false
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case GET_FILMS_RES:
			return {
				...state,
				films: action.payload,
				loaded: true
			};
		case GET_FILMS_REQ:
			return {
				...state,
				loaded: false
			};
		case GET_FILMS_ERR:
			return {
				...state,
				errors: [ ...state.errors, action.error ]
			};
		case GET_SERCH_FILMS_RES:
			return {
				...state,
				single_loaded: true,
				single: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
