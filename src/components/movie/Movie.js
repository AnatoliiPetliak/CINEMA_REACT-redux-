import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from './Image';
import './movie.css';

const Movie = (props) => {
	const sessions = useSelector((state) => state.sessions);
	const movieTime = sessions.sessions.time[0].sessions;

	return (
		<div className="movie">
			<figure>
				<Image props={props} />
				<figcaption>
					<h2 className="movie__title">{props.title}</h2>
					{movieTime.map((sessions_t) => (
						<Link to={{ pathname: `/movie/${props.title}/session/:${sessions_t.id}` }} key={sessions_t.id}>
							{sessions_t.time}
						</Link>
					))}
				</figcaption>
			</figure>
		</div>
	);
};

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	poster_path: PropTypes.string
};

export default Movie;
