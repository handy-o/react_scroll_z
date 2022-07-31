import GlobalStyles from './GlobalStyles';
import Panels from './Panels';
import Btns from './Btns';
import { useState, useEffect } from 'react';
import Anime from './asset/anime';

function App() {
	const [Scrolled, setScrolled] = useState(0);
	const [Index, setIndex] = useState(0);
	const num = 5;

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolled(window.scrollY);
		});
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: 5000 * Index,
			duration: 500,
		});
	}, [Index]);

	// 스크롤 확인
	useEffect(() => {
		//console.log(Scrolled);
	}, [Scrolled]);
	// 인덱스 확인
	useEffect(() => {
		console.log(Index);
	}, [Index]);
	return (
		<>
			<GlobalStyles />
			<Panels Scrolled={Scrolled} num={num} />
			<Btns setIndex={setIndex} num={num} />
		</>
	);
}

export default App;
