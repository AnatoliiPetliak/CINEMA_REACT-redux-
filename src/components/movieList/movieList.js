import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from '../movie/Movie';

import './movieList.css';

const MovieList = () => {
	const movies = useSelector((state) => state.films);
	const serch = useSelector((state) => state.serch);

	if (!serch.serchFilms.results) {
		return (
			<ul className="movies">
				{movies.films.results.map((movie) => (
					<li key={movie.id}>
						<Movie {...movie} />
					</li>
				))}
			</ul>
		);
	} else {
		return (
			<ul className="movies">
				{serch.serchFilms.results.map((movie) => (
					<li key={movie.id}>
						<Movie {...movie} />
					</li>
				))}
			</ul>
		);
	}
};

MovieList.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
