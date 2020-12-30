import React from 'react';
export default function Image(props) {
	const { poster_path } = props.props;
	return <img alt="movie poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} />;
}
