import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'



const Header = () => {

    return (
        <header className="l-header">
		<nav className="nav bd-grid">
			<div >
				<Link to="/dashboard" className="nav_logo"><h2>Patricia</h2></Link>
			</div>
			<div className="nav__menu" id="nav-menu" >
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/login" className="nav__link">Login</Link>
					</li>
					<li className="nav__item">
						<Link to="/register" className="nav__link">Register</Link>
					</li>
				</ul>
			</div>
			<div className="nav__menu" id="nav-menu" >
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/user-info" className="nav__link">Profile</Link>
					</li>
					<li className="nav__item">
						<Link to="/" className="nav__link logout">Logout</Link>
					</li>
				</ul>
			</div>
			<div className="nav__toggle" id="nav-toggle">
				<i className="bx bx-menu"></i>
			</div>
		</nav>
	</header>
)
}



export default Header;