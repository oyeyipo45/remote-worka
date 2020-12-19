import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/userActions';



const Header = () => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const dispatch = useDispatch();

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	const showMenu = (toggleId, navId) => {
		const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId);
	
		if (toggle && nav) {
			toggle.addEventListener('click', () => {
				nav.classList.toggle('show');
			});
		}
	};
	
	showMenu('nav-toggle', 'nav-menu');
	
	const navLink = document.querySelectorAll('.nav__link');
	
	function linkAction() {
		navLink.forEach((n) => n.classList.remove('active'));
		this.classList.add('active');
	
		const navMenu = document.getElementById('nav-menu');
		navMenu.classList.remove('show');
	}
	
	navLink.forEach((n) => n.addEventListener('click', linkAction));

    return (
        <header className="l-header">
		<nav className="nav bd-grid">
			<div >
				<Link to="/" className="nav_logo"><h2>Remote Worka</h2></Link>
				</div>
				{ userInfo ? (
					<div className="nav__menu" id="nav-menu" >
						<ul className="nav__list" >
							{ userInfo.role === 'hirer' ? (<li className="nav__item" >
							<Link to={`/createPost`} className="nav__link">Post Job</Link>
						</li>) : ( <li className="nav__item" >
							<Link to={`/appliedJobs/${userInfo._id}`} className="nav__link">View Applied Jobs</Link>
						</li> ) }
						
						<li className="nav__item" >
							<Link to={`/profile/${userInfo._id}`} className="nav__link">Profile</Link>
						</li>
						<li className="nav__item">
								<Link to="/" className="nav__link 
							logout" onClick={logoutHandler}>Logout</Link>
						</li>
						</ul>
						
					</div>
					
				) :  (
					<div className="nav__menu" id="nav-menu" >
					<ul className="nav__list">
						<li className="nav__item" >
							<Link to="/login" className="nav__link">Login</Link>
						</li>
						<li className="nav__item">
							<Link to="/register" className="nav__link">Register</Link>
						</li>
					</ul>
				</div>		
					) }
				<div className="nav__toggle" id="nav-toggle">
						<p className="">PP</p>
				</div>
			
			
			
		</nav>
	</header>
)
}



export default Header;