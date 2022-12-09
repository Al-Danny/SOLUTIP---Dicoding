import React from 'react';
import NewsItem from './NewsItem';

function NewsList({ news }) {
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
}

export default NewsList;
