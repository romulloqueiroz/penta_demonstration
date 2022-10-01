import React from 'react';
import { Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '@src/components/Text/Text';
import Touchable from '@src/components/Touchable/Touchable';
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
		>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0.66, y: 1 }}
        colors={[
          '#D943F8',
          '#884EF7'
        ]}
        style={{
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
				<Text
					weight="700"
					color='text1'
				>
					{title}
				</Text>
			</LinearGradient>
		</Touchable>
	);
};

export default Button;
