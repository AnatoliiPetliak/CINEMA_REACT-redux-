import { TIMER_TICK, TIMER_STOP } from '../constants';

const initState = {
	seconds: 60,
	status: 'paused'
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case TIMER_TICK:
			return {
				...state,
				seconds: state.seconds - 1,
				status: 'run'
			};

		case TIMER_STOP:
			return {
				...state,
				seconds: 60,
				status: 'paused'
			};

		default:
			return state;
	}
};
export default reducer;
