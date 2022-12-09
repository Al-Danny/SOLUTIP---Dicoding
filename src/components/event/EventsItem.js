import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';
import '../../style/contentHome.css';

function EventsItem({ image, title, createdAt, description }) {
	return (
		<article>
			<img src={image} alt={title} />
			<div className='description'>
				<h2>{title}</h2>
				<p>{showFormattedDate(createdAt)}</p>
				<p className=''>{description.slice(0, 100)}...</p>
			</div>
		</article>
	);
}

EventsItem.propTypes = {
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string,
	description: PropTypes.string.isRequired,
	image: PropTypes.any,
};

export default EventsItem;
