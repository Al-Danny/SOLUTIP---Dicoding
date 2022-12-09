import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/image/logo.png';
import '../../style/navbar.css';
import '../../style/hamburger.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

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
								to='/event'
								activeclassname='active'
								className='nav-NavLinks'
								onClick={handleClick}
							>
								Event
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								to='/news'
								activeclassname='active'
								className='nav-NavLinks'
								onClick={handleClick}
							>
								News
							</NavLink>
						</li>
						<li id='autentifikasi' className='nav-item'>
							<NavLink
								to='/login'
								activeclassname='active'
								className='nav-NavLinks'
								onClick={handleClick}
							>
								Login
							</NavLink>
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

export default Navbar;
