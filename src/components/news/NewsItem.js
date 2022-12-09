import { Link } from 'react-router-dom';
import '../../style/contentHome.css';

const NewsItem = (props) => {
	return (
		<article>
			<img src={props.image} alt='' />
			<div className='description'>
				<h2>{props.title.slice(0, 40)}...</h2>
				<Link to={`/article/${props.title}`}>Read Article</Link>
				<a href={props.url} target='_blank' rel='noreferrer'>
					Original Article
				</a>
				<br />
				<br />
			</div>
		</article>
	);
};

export default NewsItem;
