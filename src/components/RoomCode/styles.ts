import styled from 'styled-components';

export const Container = styled.button`
	height: 2.5rem;
	border-radius: 0.5rem;
	overflow: hidden;

	background-color: ${props => props.theme.colors.roomCodeBackground};
	border: 0.0625rem solid ${props => props.theme.colors.roomCodeBorder};

	display: flex;

	div {
		background-color: ${props =>
			props.theme.colors.roomCodeImageBackground};
		padding: 0 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	span {
		display: block;
		align-self: center;
		flex: 1;
		padding: 0 1rem 0 0.75rem;
		width: 15rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: ${props => props.theme.colors.roomCodeSpanColor};

		@media (max-width: 750px) {
			display: none;
		}
	}
`;
