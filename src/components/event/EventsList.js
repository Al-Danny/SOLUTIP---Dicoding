import React from 'react';
import PropTypes from 'prop-types';
import EventsItem from './EventsItem';

function EventsList({ events }) {
	return (
		<div className='event-cards'>
			{events.map((eventss, index) => (
				<EventsItem
					image={eventss.image}
					title={eventss.title}
					createdAt={eventss.createdAt}
					description={eventss.description}
					id={eventss.id}
					key={index}
				/>
			))}
		</div>
	);
}

EventsList.PropTypes = {
	eventss: PropTypes.arrayOf(PropTypes.object),
};

export default EventsList;
