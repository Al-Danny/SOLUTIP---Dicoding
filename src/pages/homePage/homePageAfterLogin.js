import React from 'react';
import Jumbotron2 from '../../components/header/jumbotron2';
import { Link } from 'react-router-dom';
import EventsList from '../../components/event/EventsList';
import NewsOverview from '../../components/news/NewsView';
import { getEventsHome } from '../../utils/event-data';
import '../../style/contentHome.css';

class HomePageAfterLogin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			EventsHome: getEventsHome(),
		};
	}

	render() {
		return (
			<>
				<Jumbotron2 />
				<div className='to-event'>
					<div className='menu-event'>
						<h2>Event</h2>
						<p>
							<Link to='/event'>Detail</Link>
						</p>
					</div>
					<EventsList events={this.state.EventsHome} />
				</div>

				<div className='to-news'>
					<div className='menu-event'>
						<h2>News</h2>
						<p>
							<Link to='/news'>Detail</Link>
						</p>
					</div>
					<NewsOverview />
				</div>
			</>
		);
	}
}

export default HomePageAfterLogin;
