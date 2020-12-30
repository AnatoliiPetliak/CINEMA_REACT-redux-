import { GET_FILMS_RES, GET_FILMS_ERR, GET_FILMS_REQ, GET_SERCH_FILMS_RES } from '../constants';
import { API_KEY } from '../helpers/apiKey';

export const filmsRepsonse = (res) => ({
	type: GET_FILMS_RES,
	payload: res
});

export const singleFilmResponse = (res) => ({
	type: GET_SERCH_FILMS_RES,
	payload: res
});

export const getFilms = (id) => (dispatch) => {
	dispatch({ type: GET_FILMS_REQ });

	fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
		.then((res) => res.json())
		.then((res) => {
			dispatch(filmsRepsonse(res));
		})
		.catch((err) => {
			dispatch({ type: GET_FILMS_ERR, error: err });
		});
};

export const getSingleFilm = (query) => (dispatch) => {
	fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
		.then((res) => {
			if (res.status === 404) {
				return <li>Error</li>;
			}
			return res.json();
		})
		.then((res) => {
			dispatch(singleFilmResponse(res));
		})
		.catch((err) => {
			dispatch({ type: GET_FILMS_ERR, error: err });
		});
};

export const getPromiseMovies = () => (dispatch) => {
	dispatch({
		type: 'PROMISE',
		promise: fetch(`https://api.themoviedb.org/3/movie/popular?${API_KEY}`),
		actions: [ GET_FILMS_REQ, GET_FILMS_RES, GET_FILMS_ERR ]
	});
};
