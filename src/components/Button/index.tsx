/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
	color?: string;
	backgroundColor?: string;
};

export function Button({
	isOutlined = false,
	color,
	backgroundColor,
	...props
}: ButtonProps) {
	return (
		<Container
			outlined={isOutlined}
			color={color}
			backgroundColor={backgroundColor}
			{...props}
		/>
	);
}
