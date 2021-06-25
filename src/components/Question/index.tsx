/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';

import { Container, UserInfo } from './styles';

type Question = {
	content: string;
	author: {
		name: string;
		avatar: string;
	};
	children?: ReactNode;
	isAnswered?: boolean;
	isHighlighted?: boolean;
};

export function Question({
	content,
	author,
	isAnswered = false,
	isHighlighted = false,
	children,
}: Question) {
	return (
		<Container isAnswered={isAnswered} isHighlighted={isHighlighted}>
			<p>{content}</p>
			<footer>
				<UserInfo>
					<img src={author.avatar} alt={author.name} />
					<span>{author.name}</span>
				</UserInfo>
				<div>{children}</div>
			</footer>
		</Container>
	);
}
