import React from 'react';

import { Container, UserInfo } from './styles';

type Question = {
	content: string;
	author: {
		name: string;
		avatar: string;
	};
};

export function Question({ content, author }: Question) {
	return (
		<Container>
			<p>{content}</p>
			<footer>
				<UserInfo>
					<img src={author.avatar} alt={author.name} />
					<span>{author.name}</span>
				</UserInfo>
				<div />
			</footer>
		</Container>
	);
}
