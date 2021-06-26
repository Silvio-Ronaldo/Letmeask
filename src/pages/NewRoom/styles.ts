import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	main {
		display: flex;
		flex: 8;
		align-items: center;
		justify-content: center;

		padding: 0 2rem;
	}
`;

export const MainContent = styled.div<{ isDarked: boolean }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 20rem;
	text-align: center;

	> img {
		align-self: center;
	}

	${props =>
		props.isDarked &&
		css`
			> img {
				filter: invert(38%) sepia(65%) saturate(3856%)
					hue-rotate(241deg) brightness(96%) contrast(86%);
			}
		`}

	h2 {
		font-size: 1.5rem;
		margin: 4rem 0 1.5rem;
		font-family: 'Poppins', sans-serif;
		color: ${props => props.theme.colors.createRoomTitleColor};
	}

	form {
		button {
			margin-top: 1rem;
		}

		button,
		input {
			width: 100%;
		}
	}

	p {
		font-size: 0.875rem;
		color: ${props => props.theme.colors.newRoomParagraphColor};
		margin-top: 1rem;

		a {
			color: ${props => props.theme.colors.newRoomLinkColor};
		}
	}
`;
