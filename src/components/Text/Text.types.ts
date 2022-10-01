import { StyleProp, TextStyle } from 'react-native';
import { ColorType, fontType, SpacingType } from '@styles';

type FontType = keyof typeof fontType;

interface TextComponentProps {
	children: React.ReactNode;
	weight: TextStyle['fontWeight'];
	type: FontType;
	color: keyof ColorType;
	width: number | string;
	style: StyleProp<TextStyle>;
	center: boolean;
	mb: SpacingType;
}

export type { FontType, TextComponentProps };
