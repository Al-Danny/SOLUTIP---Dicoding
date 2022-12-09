import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../style/contentHome.css';

function EventsItem({ id, image, title, createdAt, description }) {
	return (
		<Link to={`/event/${id}`}>
			<article>
				<img src={image} alt={title} />
				<div className='description'>
					<h2>{title}</h2>
					<p>{showFormattedDate(createdAt)}</p>
					<p className=''>{description.slice(0, 100)}...</p>
				</div>{' '}
				<br />
			</article>
		</Link>
	);
}

EventsItem.propTypes = {
	title: PropTypes.string.isRequired,
	createdAt: PropTypes.string,
	description: PropTypes.string.isRequired,
	image: PropTypes.any,
	id: PropTypes.number.isRequired,
};

export default EventsItem;
