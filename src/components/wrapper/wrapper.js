import React, { Component } from 'react';
import { getFilms, getSessions, getSingleFilm, getPromiseMovies } from '../../actions/';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import MoviesList from '../movieList/movieList';
import Search from '../searchMovie/Search';
import Header from '../header/Header';
import NavBar from '../navigation/NavBar';
import Footer from '../footer/Footer';
import Loader from '../loader/Loader';
import SinemaHall from '../cinemaHall/CinemaHall';

import '../loader/Loader.css';
import './wrapper.css';

const history = createBrowserHistory();

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			error: null,
			errorInfo: null,
			movies: [],
			activePage: 1,
			moviesPerPage: 5
		};
		this.onInput = this.onInput.bind(this);
	}

	componentDidMount() {
		this.props.getFilms();
		this.props.getSessions();
	}

	onInput(query) {
		if (query) {
			this.props.getSingleFilm(query);
		} else if (query === '') {
			this.props.getFilms();
		}
		this.setState({
			query: query
		});
	}

	render() {
		const { query, error, activePage, moviesPerPage, movies } = this.state;
		const { loaded } = this.props.data;

		const isSearched = (query) => (item) => !query || item.title.toLowerCase().includes(query.toLowerCase());

		//Pagination
		const indexOfLastMovie = activePage * moviesPerPage;
		const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
		const currentMovie = movies.slice(indexOfFirstMovie, indexOfLastMovie);

		if (error) {
			return <h1>Error caught!</h1>;
		}

		if (!loaded) {
			return <Loader />;
		}

		return (
			<div className="app">
				<Router history={history}>
					<Switch>
						<Route
							exact
							path="/"
							render={() => {
								return (
									<div>
										<Header />
										<NavBar />

										<Search
											query={query}
											onInput={this.onInput}
											placeholder="Search for Movie Title …"
										/>
										<MoviesList movies={currentMovie.filter(isSearched(query))} />
										<Footer />
									</div>
								);
							}}
						/>

						<Route component={SinemaHall} />
					</Switch>
				</Router>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	data: state.films,
	loaded: state.loaded,
	errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
	getFilms: () => {
		dispatch(getFilms());
		// dispatch(getPromiseMovies());
	},
	getSessions: () => {
		dispatch(getSessions());
	},
	getSingleFilm: (query) => {
		dispatch(getSingleFilm(query));
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
