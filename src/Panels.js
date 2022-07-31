import styled from 'styled-components';

const Section = styled.section`
	position: fixed;
	width: 1200px;
	height: 700px;
	border: 1px solid red;
	top: 50%;
	left: 50%;
	margin-left: -600px;
	margin-top: -350px;
	z-index: 1;
	perspective: 2300px;
`;

const Article = styled.article`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.3;
	background: blue;
	color: #fff;
	justify-content: center;
	align-items: center;
`;

function Panels({ Scrolled }) {
	return (
		<Section>
			{[0, 1, 2, 3, 4].map((num) => {
				return (
					<Article
						key={num}
						style={{ transform: `translateZ(${-5000 * num + Scrolled}px)` }}>
						{num}
					</Article>
				);
			})}
		</Section>
	);
}

export default Panels;
