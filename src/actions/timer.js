import { TIMER_TICK, TIMER_STOP } from '../constants';

let timer = null;

export const startTimer = () => (dispatch) => {
	clearInterval(timer);
	timer = setInterval(() => dispatch(tick()), 1000);
};

const tick = () => (dispatch) => {
	dispatch({ type: TIMER_TICK });
};
export const stopTimer = () => {
	clearInterval(timer);
	return { type: TIMER_STOP };
};
