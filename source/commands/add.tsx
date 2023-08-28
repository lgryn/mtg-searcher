import React from 'react';
import {Text} from 'ink';

type Props = {
	url: string;
};

export default function Add({url}: Props) {
	return (
		<Text>
			Adding: <Text color="green">{url}</Text>
		</Text>
	);
}
