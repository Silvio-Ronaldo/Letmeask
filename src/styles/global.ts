import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #f8f8f8;
		color: #29292e;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button, textarea {
		font: 400 1rem 'Roboto', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;
