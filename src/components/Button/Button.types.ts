import { SpacingType } from '@styles';

export interface ButtonProps {
	title: string;
	disabled?: boolean;
	mb?: SpacingType;
	onPress?: () => void;
	br?: SpacingType;
}
