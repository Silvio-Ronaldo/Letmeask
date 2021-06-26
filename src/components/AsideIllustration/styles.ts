import styled from 'styled-components';

export const Container = styled.aside`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	background-color: ${props => props.theme.colors.asideBackground};
	color: ${props => props.theme.colors.color};

	padding: 7.5rem 5rem;

	@media (max-width: 660px) {
		padding: 5rem 2.5rem;
	}

	@media (max-width: 560px) {
		display: none;
	}

	img {
		max-width: 20rem;

		@media (max-width: 880px) {
			max-width: 10rem;
		}
	}

	strong {
		font: 700 2.25rem 'Poppins', sans-serif;
		line-height: 2.625rem;
		margin-top: 1rem;

		@media (max-width: 880px) {
			font-size: 1.5rem;
			line-height: 2rem;
			text-align: left;
		}
	}

	p {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-top: 1rem;
		color: ${props => props.theme.colors.paragraphColor};

		@media (max-width: 880px) {
			font-size: 1rem;
			line-height: 1.5rem;
			text-align: left;
		}
	}
`;
