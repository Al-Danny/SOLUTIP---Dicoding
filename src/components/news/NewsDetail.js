import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showFormattedDate } from '../../utils';
import '../../style/detail.css';

const NewsItemDetails = (props) => {
	let [filteredData, setFilteredData] = useState([]);
	let { title } = useParams();

	console.log('FilteredData: ', filteredData);

	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=5a239f7e8e514fdbbb44fcb17b274c5c'
		)
			.then((response) => response.json())
			.then((json) => setFilteredData(json.articles));
	}, []);

	let filterDetail = filteredData.filter((elt) => {
		return (
			elt.title.toString().toLowerCase() === title.toString().toLowerCase()
		);
	});

	console.log('Filterdetail: ', filterDetail);

	return (
		<>
			<div className='detail-article'>
				{filterDetail.map((elt, index) => (
					<div key={index + elt}>
						<h1>{elt.title}</h1>
						<p>{showFormattedDate(elt.publishedAt)}</p>
						<img src={elt.urlToImage} alt='' />
						<p>{elt.content}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default NewsItemDetails;
