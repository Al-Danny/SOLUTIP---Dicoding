import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../style/contentHome.css';

function ConsulItem({ id, antrianke, Nama, description, createdAt }) {
	return (
		<Link to={`/consultation/${id}`}>
			<article>
				<div className='description desc-card-konsul'>
					<h2>{Nama}</h2>
					<p>
						Antrian ke-{antrianke} | {showFormattedDate(createdAt)}
					</p>
					<p className=''>{description.slice(0, 100)}...</p>
				</div>
			</article>
		</Link>
	);
}

ConsulItem.propTypes = {
	antrianke: PropTypes.string.isRequired,
	nama: PropTypes.string.isRequired,
	createdAt: PropTypes.string,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default ConsulItem;
