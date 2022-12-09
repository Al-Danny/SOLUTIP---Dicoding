import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import '../../style/contentHome.css';

const NewsOverview = () => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=5a239f7e8e514fdbbb44fcb17b274c5c'
		)
			.then((res) => res.json())
			.then((json) => setNews(json.articles));
	}, []);
	console.log(news);

	return (
		<div className='news-cards'>
			{news.map((elt, index) => (
				<NewsItem
					key={index + elt}
					image={elt.urlToImage}
					title={elt.title}
					description={elt.content}
					date={new Date(elt.publishedAt).toLocaleString('de-DE', {
						dateStyle: 'medium',
					})}
					url={elt.url}
				/>
			))}
		</div>
	);
};

export default NewsOverview;
