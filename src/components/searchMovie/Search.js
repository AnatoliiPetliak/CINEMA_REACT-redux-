import React from 'react';
import PropTypes from 'prop-types';

import './movieSearch.css';

const Search = (props) => {
	const { query, placeholder, onInput } = props;

	return (
		<form className="search" onInput={(event) => onInput(event.target.value)}>
			<input type="search" defaultValue={query} placeholder={placeholder} />
		</form>
	);
};

Search.propTypes = {
	query: PropTypes.string.isRequired,
	onInput: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default Search;
