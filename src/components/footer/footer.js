import React from 'react';
import '../../style/footer.css';
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
	return (
		<footer>
			<div className='copyright'>
				<a href='#nav'>
					<p className='cpy'>&copy;SOLUTIP, 2022. ALL RIGHTS RESERVED</p>
				</a>
			</div>
			<div className='follow'>
				<p className='flw'>FOLLOW KAMI DI </p>
				<div className='contacts'>
					<a
						href='https://twitter.com/ukki_upnjatim'
						target='_blank'
						rel='no noreferrer'
					>
						<BsTwitter />
					</a>
					<a
						href='https://web.facebook.com/upn.ukki'
						target='_blank'
						rel='no noreferrer'
					>
						<BsFacebook />
					</a>
					<a
						href='https://www.instagram.com/ukki_upn/'
						target='_blank'
						rel='no noreferrer'
					>
						<BsInstagram />
					</a>
					<a
						href='https://www.youtube.com/@ukkiupnveteranjawatimur7001'
						target='_blank'
						rel='no noreferrer'
					>
						<BsYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
