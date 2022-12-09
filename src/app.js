import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/authPage/LoginPage';
import RegisterPage from './pages/authPage/RegisterPage';
import HomePageBeforeLogin from './pages/homePage/homePageBeforeLogin';
import HomePageAfterLogin from './pages/homePage/homePageAfterLogin';
import Navbar from '../src/components/header/navbar';
import Navbar2 from './components/header/navbar2';
import Footer from '../src/components/footer/footer';
import NewsPage from './pages/newsPage/newsPage';
import NewsDetailPage from './pages/newsPage/newsDetailPage';
import EventPage from './pages/eventPage/eventPage';
import EventDetailPage from './pages/eventPage/eventDetailPage';
import ConsulPage from './pages/consulPage/consulPage';
import ConsulDetailPage from './pages/consulPage/consulDetailPage';
import ConsulAddPage from './pages/consulPage/consulAddPage';
import NotfoundPage from './pages/notFoundPage/notFoundPage';
import AuthedUserContext from '../src/contexts/AuthedUserContext';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
	const [authedUser, setAuthedUser] = React.useState(null);
	const [initializing, setInitializing] = React.useState(true);

	React.useEffect(() => {
		async function initData() {
			const { data } = await getUserLogged();
			setAuthedUser(data);
			setInitializing(false);
		}

		initData();

		return () => {
			setAuthedUser('');
			setInitializing('');
		};
	}, []);

	const onLoginSuccess = async ({ accessToken }) => {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();
		setAuthedUser(data);
	};

	const onLogout = () => {
		setAuthedUser(null);
		putAccessToken('');
	};

	const authedUserContextValue = React.useMemo(
		() => ({ authedUser, setAuthedUser, onLogout }),
		[authedUser]
	);

	const render = () => {
		if (initializing) {
			return (
				<div className='loader-container'>
					<div className='spinner' />
				</div>
			);
		}

		if (authedUser === null) {
			return (
				<AuthedUserContext.Provider value={authedUserContextValue}>
					<Navbar />
					<main>
						<Routes>
							<Route path='/*' element={<NotfoundPage />} />
							<Route path='/' element={<HomePageBeforeLogin />} />
							<Route path='/home' element={<HomePageBeforeLogin />} />
							<Route path='/news' element={<NewsPage />} />
							<Route path='/article/:title' element={<NewsDetailPage />} />
							<Route path='/event' element={<EventPage />} />
							<Route path='/event/:id' element={<EventDetailPage />} />
							<Route
								path='/login'
								element={<LoginPage loginSuccess={onLoginSuccess} />}
							/>
							<Route path='/register' element={<RegisterPage />} />
						</Routes>
					</main>
					<Footer />
				</AuthedUserContext.Provider>
			);
		}

		return (
			<AuthedUserContext.Provider value={authedUserContextValue}>
				<Navbar2 />
				<main>
					<Routes>
						<Route path='/login' element={<HomePageAfterLogin />} />
						<Route path='/*' element={<NotfoundPage />} />
						<Route path='/home' element={<HomePageAfterLogin />} />
						<Route path='/consultation' element={<ConsulPage />} />
						<Route path='/consultation/:id' element={<ConsulDetailPage />} />
						<Route path='/news' element={<NewsPage />} />
						<Route path='/article/:title' element={<NewsDetailPage />}></Route>
						<Route path='/event' element={<EventPage />} />
						<Route path='/event/:id' element={<EventDetailPage />} />
						<Route path='/add' element={<ConsulAddPage />} />
					</Routes>
				</main>
				<Footer />
			</AuthedUserContext.Provider>
		);
	};

	return render();
}

export default App;
