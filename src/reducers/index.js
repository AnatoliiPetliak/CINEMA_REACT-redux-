import { combineReducers } from 'redux';
import films from './films';
import sessions from './sessions';
import serch from './serch';
import timer from './timer';

const root_reducer = combineReducers({
	films,
	sessions,
	serch,
	timer
});

export default root_reducer;
