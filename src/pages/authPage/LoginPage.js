import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/LoginInput';
import { login } from '../../utils/network-data';
import imgLogin from '../../assets/image/img-auth.png';
import '../../style/autentifikasi.css';

function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<>
			<div className='login'>
				<div className='img-login'>
					<img src={imgLogin} />
				</div>
				<div className='form-login'>
					<h1>Login</h1>
					<p>Hi, User. Silahkan Masuk!</p>
					<LoginInput login={onLogin} />
					<p>
						Belum punya akun? <Link to='/register'>Daftar di sini.</Link>
					</p>
				</div>
			</div>
		</>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
