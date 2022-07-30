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

function Btns() {
	return (
		<ScrollBtns>
			<li className='on'>box1</li>
			<li>box2</li>
			<li>box3</li>
			<li>box4</li>
			<li>box5</li>
		</ScrollBtns>
	);
}

export default Btns;
