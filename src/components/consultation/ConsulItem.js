import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';
import '../../style/contentHome.css';

function ConsulItem({ Nama, description, createdAt }) {
	return (
		<article>
			<div className='description'>
				<h2>{Nama}</h2>
				<p>{showFormattedDate(createdAt)}</p>
				<p className=''>{description.slice(0, 100)}...</p>
			</div>
		</article>
	);
}

ConsulItem.propTypes = {
	nama: PropTypes.string.isRequired,
	createdAt: PropTypes.string,
	description: PropTypes.string.isRequired,
};

export default ConsulItem;
