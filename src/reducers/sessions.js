import { GET_SESSIONS_RES } from '../constants';

const initState = {
	sessions: []
};
const reducer = (state = initState, action) => {
	switch (action.type) {
		case GET_SESSIONS_RES:
			return {
				...state,
				sessions: action.payload
			};

		default:
			return state;
	}
};
export default reducer;
