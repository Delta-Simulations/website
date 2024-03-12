import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Render } from './hooks/render';
import BackgroundVideo from './components/backgroundVideo';
import { ButtonBar } from './components/ButtonBar';
import { NavButton } from './components/NavButton';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';

// eslint-disable-next-line react-refresh/only-export-components
const Main = () => {
	const logo = <img src="/LOGO_Blank.png" className="w-20" alt="logo" />;

	const NavButtons = [
		<NavButton text="About" to="/about" />,
		<NavButton text="Contact" to="/contact" />,
	];

	return (
		<BrowserRouter>
			<BackgroundVideo videoSource="/c17.mp4" playbackSpeed={0.8}>
				<ButtonBar buttons={NavButtons} logo={logo} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BackgroundVideo>
		</BrowserRouter>
	);
};

Render(<Main />);
