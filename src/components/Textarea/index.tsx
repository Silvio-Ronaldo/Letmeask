import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string;
}

export function Textarea({ name, ...rest }: TextareaProps) {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const { fieldName, registerField } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: textareaRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<textarea ref={textareaRef} {...rest} />
		</Container>
	);
}
