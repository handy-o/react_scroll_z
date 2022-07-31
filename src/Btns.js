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

function Btns({ setIndex }) {
	return (
		<ScrollBtns>
			{[0, 1, 2, 3, 4].map((num) => {
				return <li key={num} onClick={() => setIndex(num)}>{`Box${num}`}</li>;
			})}
		</ScrollBtns>
	);
}

export default Btns;
