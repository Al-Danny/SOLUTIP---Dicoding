import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/index';

function EventsItemDetail({ image, title, createdAt, description }) {
	return (
		<>
			<div className='detail-article'>
				<h1 className=''>{title}</h1>
				<p className=''>{showFormattedDate(createdAt)}</p>
				<img src={image} alt='' />
				<p>{description}</p>
			</div>
		</>
	);
}

EventsItemDetail.propTypes = {
	image: PropTypes.any,
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default EventsItemDetail;
