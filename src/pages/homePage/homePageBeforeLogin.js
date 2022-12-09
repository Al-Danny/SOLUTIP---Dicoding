import React from 'react';
import Jumbotron from '../../components/header/jumbotron';
import { Link } from 'react-router-dom';
import EventsList from '../../components/event/EventsList';
import NewsList from '../../components/news/NewsList';
import { getEventsHome } from '../../utils/event-data';
import { getNewsHome } from '../../utils/news-data';
import '../../style/contentHome.css';

class HomePageBeforeLogin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			EventsHome: getEventsHome(),
			NewsHome: getNewsHome(),
		};
	}

	render() {
		return (
			<>
				<Jumbotron />
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
					<NewsList news={this.state.NewsHome} />
				</div>
				<br />
			</>
		);
	}
}

export default HomePageBeforeLogin;
