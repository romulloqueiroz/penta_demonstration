import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import View from '@src/components/View/View';
import { chooseType } from './Gradient.utils';
import { GradientProps } from './Gradient.types';

const Gradient: React.FC<Partial<GradientProps>> = ({ children, type='black', ...rest }) => {
  return (
    <LinearGradient
      start={{ x: chooseType(type).sx, y: chooseType(type).sy }}
      end={{ x: chooseType(type).ex, y: chooseType(type).ey }}
      colors={[
        chooseType(type).color1,
        chooseType(type).color2
      ]}
      style={{ flex: 1 }}
    >
		  <View h='100%' w='100%' {...{ ...rest }}>
        {children}
      </View>
    </LinearGradient>
  )
}

export default Gradient;