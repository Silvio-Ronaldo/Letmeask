import styled from 'styled-components';

export const Container = styled.div`
	header {
		padding: 1.5rem;
		border-bottom: 0.0625rem solid #e2e2e2;
	}

	main {
		max-width: 50rem;
		margin: 0 auto;
	}
`;

export const HeaderContent = styled.div`
	max-width: 70rem;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> img {
		max-height: 2.8125rem;
	}
`;

export const RoomTitle = styled.div`
	margin: 2rem 0 1.5rem;
	display: flex;
	align-items: center;

	h1 {
		font-family: 'Poppins', sans-serif;
		font-size: 1.5rem;
		color: #29292e;
	}

	span {
		margin-left: 1rem;
		background-color: #e559f9;
		border-radius: 9999px;
		padding: 0.5rem 1rem;
		color: #fff;
		font-weight: 500;
		font-size: 0.875rem;
	}
`;

export const FormFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;

	div {
		display: flex;
		align-items: center;

		img {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
		}

		span {
			margin-left: 0.5rem;
			color: #29292e;
			font-weight: 500;
			font-size: 0.875rem;
		}
	}

	> span {
		font-size: 0.875rem;
		color: #737380;
		font-weight: 500;

		button {
			background-color: transparent;
			border: 0;
			color: #835afd;
			text-decoration: underline;
			font-size: 0.875rem;
		}
	}
`;
