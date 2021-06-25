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
};

export function Question({ content, author, children }: Question) {
	return (
		<Container>
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
