import React from 'react';
import { Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '@src/components/Text/Text';
import Touchable from '@src/components/Touchable/Touchable';
import Gradient from '@src/components/Gradient/Gradient';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
	title = 'button',
	disabled = false,
	mb,
	br = 's',
	onPress
}) => {
	const handlePress = () => {
		Keyboard.dismiss();
		onPress!();
	};

	return (
		<Touchable
			disabled={disabled}
			onPress={handlePress}
			h={48}
			mb={mb}
			row
      br='xxxs'
      style={{ overflow: 'hidden' }}
			w='100%'
		>
      <Gradient row main='center' cross='center' type='primary'>
				<Text weight="700" color='text1'>
					{title}
				</Text>
			</Gradient>
		</Touchable>
	);
};

export default Button;
