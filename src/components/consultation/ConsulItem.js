import React from 'react';
import { showFormattedDate } from '../../utils/index';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../style/contentHome.css';

function ConsulItem({ id, antrianke, Nama, description, createdAt }) {
	return (
		<article>
			<div className='description'>
			<h1>Antrian ke {antrianke}</h1>
				<h2>
					<Link to={`/consultation/${id}`}>{Nama}</Link>
				</h2>
				<p>{showFormattedDate(createdAt)}</p>
				<p className=''>{description.slice(0, 100)}...</p>
			</div>
		</article>
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
