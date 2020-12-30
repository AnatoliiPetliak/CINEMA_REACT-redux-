import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wrapper from './components/wrapper/wrapper';

import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					<Wrapper />
				</div>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
