import GlobalStyles from './GlobalStyles';
import Panels from './Panels';
import Btns from './Btns';
import { useState, useEffect, useRef } from 'react';
import Anime from './asset/anime';

function App() {
	const [Scrolled, setScrolled] = useState(0);
	const [Index, setIndex] = useState(0);
	const [Active, setActive] = useState(0); // 해당 영역에서 index값 활성화
	const num = useRef(5);
	const distance = useRef(1000); // 스크롫 거리
	const speed = useRef(500);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolled(window.scrollY);

			for (let i = 0; i < num.current; i++) {
				if (window.scrollY >= i * distance.current) {
					setActive(i);
				}
			}
		});
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: distance.current * Index,
			duration: speed.current,
		});
	}, [Index]);

	// 스크롤 확인
	useEffect(() => {
		//console.log(Scrolled);
	}, [Scrolled]);
	// 인덱스 확인
	useEffect(() => {
		//console.log(Index);
	}, [Index]);

	// Active값 확인
	useEffect(() => {
		//console.log(Active);
	}, [Active]);

	return (
		<>
			<GlobalStyles num={num.current} distance={distance.current} />
			<Panels
				Scrolled={Scrolled}
				num={num.current}
				distance={distance.current}
				Active={Active}
			/>
			<Btns
				setIndex={setIndex}
				num={num.current}
				Active={Active}
				distance={distance.current}
				speed={speed.current}
			/>
		</>
	);
}

export default App;
