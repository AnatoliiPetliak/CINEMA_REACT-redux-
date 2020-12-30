import { GET_SESSIONS_RES } from '../constants';
import time from './session.json';

const sesionsRepsonse = (time) => ({
	type: GET_SESSIONS_RES,
	payload: time
});

export const getSessions = () => (dispatch) => {
	dispatch(sesionsRepsonse(time));
};
