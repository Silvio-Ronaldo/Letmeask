import styled, { css } from 'styled-components';

export const Container = styled.button<{ isDarked: boolean }>`
	border: 0;
	background: transparent;

	&:hover {
		transform: translateX(-25%);
	}

	${props =>
		props.isDarked &&
		css`
			color: #835afd;

			&:hover {
				color: ${props.theme.colors.sunButton};
			}
		`}

	${props =>
		!props.isDarked &&
		css`
			color: #835afd;

			&:hover {
				color: ${props.theme.colors.moonButton};
			}
		`}
`;
