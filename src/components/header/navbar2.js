import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/image/logo.png';
import { BiExit } from 'react-icons/bi';
import AuthedUserContext from '../../contexts/AuthedUserContext';
import '../../style/navbar.css';
import '../../style/hamburger.css';

function Navbar2() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const { authedUser, onLogout } = React.useContext(AuthedUserContext);

	return (
		<>
			<nav className='navbar'>
				<div className='nav-container'>
					<NavLink to='/' className='nav-logo'>
						<img src={Logo} alt='solutip'></img>
					</NavLink>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<NavLink
								to='/home'
								activeclassname='active'
								className='nav-NavLinks'
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/consultation'
								activeclassname='active'
								className='nav-NavLinks'
								onClick={handleClick}
							>
								konsultasi
							</NavLink>
						</li>
						<li id='autentifikasi'>
							{authedUser ? (
								<button className='button-logout' onClick={onLogout}>
									{authedUser.name}
									<BiExit />
								</button>
							) : (
								''
							)}
						</li>
					</ul>

					<div className='nav-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar2;
