import { useState } from 'react';
// import { useRoute } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { deviceWidth, colors, IconType } from '@styles';
import View from '@src/components/View/View';
import { NavigatorIcon } from './NavigatorIcon/NavigatorIcon';

const iconsArr = [
  {
    title: 'Home',
    icon: 'home'
  },
  {
    title: 'Music',
    icon: 'search'
  },
  {
    title: 'Market',
    icon: 'shoppingCart'
  },
  {
    title: 'My page',
    icon: 'accountCircle'
  },
]

type Active = 0 | 1 | 2 | 3;

const BottomNavigator = () => {
	// const { name: routeName } = useRoute();
	const current = useSharedValue(0);
  const [active, setActive] = useState<Active>(0);
	const screenWidth = deviceWidth - 48;
  const transform = (val: number) => {
    switch(val) {
      case 0: 
        return 44;
      case 1: 
        return 124;
      case 2: 
        return 210;
      case 3: 
        return 308;
      default:
        return 44;
    }
  }

  const value = transform(current.value);

  const animatedBackgroundTag = useAnimatedStyle(() => ({
		transform: [{ translateX: withTiming(value) }]
	}));

  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0
        }}
        w='100%'
        bgc='background4'
        btlr='xs'
        btrr='xs'
      >
        <Animated.View 
          style={[{
            position: 'absolute',
            backgroundColor: colors.text2,
            width:24,
            height: 4,
            borderRadius: 16,
            top: 0,
          }, 
          animatedBackgroundTag]} 
        />
        <View flex1 row main='space-between' pv='xs' ph='m'>

          {iconsArr.map((item, index) => (
            <NavigatorIcon 
              key={index}
              title={item.title} 
              icon={item.icon as IconType} 
              active={active === index}
              onPress={() => {
                setActive(index as Active);
                current.value = index;
              }}
            /> 
          ))}

        </View>
        <View h={34} />
      </View>
    </>
  );
}

export default BottomNavigator;
