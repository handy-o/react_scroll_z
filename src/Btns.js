import styled from 'styled-components';
import Anime from './asset/anime';

const ScrollBtns = styled.ul`
	position: fixed;
	left: 100px;
	top: 300px;
	z-index: 2;

	li {
		margin-bottom: 20px;
		cursor: pointer;
		&.on {
			color: blue;
		}
	}
`;

function Btns({ setIndex, num, Active, distance, speed }) {
	// 현재활성화 순번에 맞는 위치값을 구해서
	// 만약 현재 스크롤의 위치값의 현재 활성화 순번의 위치값과 같지 않으면
	// Anime를 이용해서 현재 활성화 위치값으로 강제 모션이동
	// 만약 같으면 return으로 함수종료 (불필요한 Anime호출 방지)
	const matchPops = () => {
		const pos = Active * distance;
		const curPos = window.scrollY;
		if (curPos === pos) return;
		new Anime(window, {
			prop: 'scroll',
			value: pos,
			duration: speed,
		});
	};

	return (
		<ScrollBtns>
			{Array(num)
				.fill()
				.map((_, idx) => {
					let on = '';
					if (idx === Active) on = 'on';
					return (
						<li
							className={on}
							key={idx}
							onClick={() => {
								setIndex(idx);
								matchPops();
							}}>
							{`Box${idx + 1}`}
						</li>
					);
				})}
		</ScrollBtns>
	);
}

export default Btns;
