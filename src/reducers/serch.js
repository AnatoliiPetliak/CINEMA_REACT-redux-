import { GET_SERCH_FILMS_RES } from '../constants';

const initState = {
	serchFilms: []
};
const reducer = (state = initState, action) => {
	switch (action.type) {
		case GET_SERCH_FILMS_RES:
			return {
				...state,
				serchFilms: action.payload
			};

		default:
			return state;
	}
};
export default reducer;
