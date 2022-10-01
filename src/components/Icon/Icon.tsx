import React from 'react';
import { colors } from '@styles';
import { icon } from '@styles';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from './Icon.types';

const Icon: React.FC<Partial<IconProps>> = ({ name = 'home', color = 'text1', size = 24, style }) => {
	const chosenColor = colors[color];
	return (
		<Svg 
      width={size} 
      height={size} 
      viewBox="0 0 25 24" 
      fill="none" 
      style={{ ...(style as object) }}
    >
			{icon[name].map((d) => (
				<Path key={d} fillRule="evenodd" clipRule="evenodd" d={d} fill={chosenColor} />
			))}
		</Svg>
	);
};

export default Icon;
