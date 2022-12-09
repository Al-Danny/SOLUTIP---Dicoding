import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../../components/RegisterInput';
import { register } from '../../utils/network-data';
import imgRegist from '../../assets/image/img-auth.png';
import '../../style/autentifikasi.css';

function RegisterPage() {
	async function onRegisterHandler(user) {
		await register(user);
	}

	return (
		<>
			<div className='register'>
				<div className='img-register'>
					<img src={imgRegist} alt='' />
				</div>
				<div className='form-regist'>
					<h1>Register</h1>
					<p>Hi, User. Gassin jadi member!</p>
					<RegisterInput register={onRegisterHandler} />
					<p>
						Sudah punya akun? <Link to='/login'>Masuk</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
