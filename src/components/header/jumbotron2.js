import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/image/img-hero.png';
import antre from '../../assets/image/img-antre.png';
import konsul from '../../assets/image/img-konsultasi.png';
import '../../style/jumbotron.css';

function Jumbotron2() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<header>
				<div className='img-header'>
					<img src={img} />
				</div>
				<div className='hero-content'>
					<h1>SOLUSI MEDIS TERPERCAYA</h1>
					<p>
						Ambil nomor antrean dan dapatkan solusi medismu secara praktis hanya
						di Solutip Medical Check Up. Stay Health :)
					</p>
					<div className='fitur'>
						<ul>
							<NavLink
								to='/antrean'
								className='klik-antre'
								onClick={handleClick}
							>
								<li>
									<div className='pic antre'>
										<img src={antre} />
									</div>
									<p>Antrean</p>
								</li>
							</NavLink>

							<NavLink
								to='/consultation'
								className='klik-konsultasi'
								onClick={handleClick}
							>
								<li>
									<div className='pic'>
										<img src={konsul} />
									</div>
									<p>Konsultasi</p>
								</li>
							</NavLink>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}

export default Jumbotron2;
