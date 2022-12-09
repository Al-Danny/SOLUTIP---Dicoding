import React from 'react';
import ConsulList from '../../components/consultation/ConsulList';
import { getActiveConsul } from '../../utils/konsul-data';

class ConsulPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ActiveConsul: getActiveConsul(),
		};
	}
	render() {
		return (
			<>
				<div className='cards'>
					<h1>CONSULTATION PAGE</h1>
					<ConsulList consul={this.state.ActiveConsul} />
					<br />
				</div>
			</>
		);
	}
}

export default ConsulPage;
