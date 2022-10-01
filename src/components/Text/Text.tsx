import React from 'react';
import { Text } from 'react-native';
import { colors, fontType, spacing } from '@styles';
import { TextComponentProps } from './Text.types';

const TextComponent: React.FC<Partial<TextComponentProps>> = ({
	children,
	weight = 'normal',
	type = 'medium',
	color = 'text1',
	width = 0,
	center = false,
	mb = 'zero',
	style
}) => {
	const chosenColor = colors[color];
	return (
		<Text style={{
				fontWeight: weight,
				textAlign: center ? 'center' : 'left',
				color: chosenColor,
				...(width && { width }),
				...fontType[type],
				...(!!mb && { marginBottom: spacing[mb] }),
				...{ ...(style as object) }
			}}>
			{children}
		</Text>
	);
};

export default TextComponent;
