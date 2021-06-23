import styled from 'styled-components';

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

export const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 20rem;
	text-align: center;

	> img {
		align-self: center;
	}

	h2 {
		font-size: 1.5rem;
		margin: 4rem 0 1.5rem;
		font-family: 'Poppins', sans-serif;
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
		color: #737380;
		margin-top: 1rem;

		a {
			color: #e559f9;
		}
	}
`;
