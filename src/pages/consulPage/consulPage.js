import React from 'react';
import ConsulList from '../../components/consultation/ConsulList';
import { getActiveConsul } from '../../utils/konsul-data';
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
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
					<div>
					<Link to="/add">
					<button className="action" type="button" title="Add Notes">
              <FaPlus />
            </button>
					</Link>
					</div>
				</div>
			</>
		);
	}
}

export default ConsulPage;
