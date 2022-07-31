import styled from 'styled-components';

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

function Btns({ setIndex, num }) {
	return (
		<ScrollBtns>
			{Array(num)
				.fill()
				.map((_, idx) => {
					return (
						<li key={idx} onClick={() => setIndex(idx)}>{`Box${idx + 1}`}</li>
					);
				})}
		</ScrollBtns>
	);
}

export default Btns;
