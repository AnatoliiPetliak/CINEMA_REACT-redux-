import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = (props) => {
	return (
		<div className="navbar">
			<a href="https://www.notion.so/1-e89e61d80e24442f8e2230d26db54e93">Task</a>
			<Link to="/load">{props.children}</Link>
		</div>
	);
};

export default NavBar;
