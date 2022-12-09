import React, { useState } from 'react';
import { useParams } from 'react-router';
import EventsItemDetail from '../../components/event/EventsItemDetail';
import { getEvents } from '../../utils/event-data.js';

function EventDetailPage() {
	const { id } = useParams();
	const [Event_Detail] = useState(getEvents(id));

	return (
		<>
			<EventsItemDetail {...Event_Detail} />
		</>
	);
}

export default EventDetailPage;
