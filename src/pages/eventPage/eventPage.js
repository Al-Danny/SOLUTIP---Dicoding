import React from 'react';
import EventsList from '../../components/event/EventsList';
import { getActiveEvents } from '../../utils/event-data';

class EventPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ActiveEvents: getActiveEvents(),
		};
	}
	render() {
		return (
			<>
				<div className='cards'>
					<h1>EVENT PAGE</h1>
					<EventsList events={this.state.ActiveEvents} />
					<br />
				</div>
			</>
		);
	}
}

export default EventPage;
