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
	perspective: 5000px;
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

function Panels({ Scrolled, num }) {
	return (
		<Section>
			{Array(num)
				.fill()
				.map((_, idx) => {
					return (
						<Article
							key={idx}
							style={{ transform: `translateZ(${-5000 * idx + Scrolled}px)` }}>
							{idx + 1}
						</Article>
					);
				})}
		</Section>
	);
}

export default Panels;
