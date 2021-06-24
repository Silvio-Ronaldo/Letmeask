/* eslint-disable react/require-default-props */
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
	return <Container outlined={isOutlined} {...props} />;
}
