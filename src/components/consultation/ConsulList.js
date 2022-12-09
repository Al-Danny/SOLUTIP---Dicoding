import React from 'react';
import PropTypes from 'prop-types';
import ConsulItem from './ConsulItem';

function ConsulList({ consul }) {
	return (
		<div className='consul-cards'>
			{consul.map((consult, index) => (
				<ConsulItem
					antrianke={consult.antrianke}
					Nama={consult.Nama}
					createdAt={consult.createdAt}
					description={consult.description}
					id={consult.id}
					key={index}
				/>
			))}
		</div>
	);
}

ConsulList.propTypes = {
	eventss: PropTypes.arrayOf(PropTypes.object),
};

export default ConsulList;
