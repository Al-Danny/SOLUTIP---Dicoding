import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCnslFull from '../../components/consultationForm/FormCnslFull';
import { addConsul } from '../../utils/konsul-data';

function ConsulAddPage() {
	const navigate = useNavigate();
	let [antrianke, setAntrianke] = useState('');
	let [Nama, SetNama] = useState('');
	let [description, setDescription] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addConsul({ antrianke, Nama, description });
		navigate('/');
	};
	return (
		<div className>
			<FormCnslFull
				handleSubmit={handleSubmit}
				antrianke={antrianke}
				Nama={Nama}
				handleChange={(e) => SetNama(e.target.value)}
				description={description}
				handleClick={(e) => setAntrianke(e.target.value)}
				handleInput={(e) => setDescription(e.target.innerHTML)}
			/>
		</div>
	);
}

export default ConsulAddPage;
