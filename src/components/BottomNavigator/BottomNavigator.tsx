import { useState } from 'react';
import Icon from '@src/components/Icon/Icon';
import Text from '@src/components/Text/Text';
import View from '@src/components/View/View';
import Touchable from '@src/components/Touchable/Touchable';
import { IconType } from '@styles';

type Active = 0 | 1 | 2 | 3;

interface NavigatorIconProps { 
  title: string; 
  icon: IconType; 
  onPress: () => void;
  active: boolean;
}

const NavigatorIcon: React.FC<NavigatorIconProps> = ({ title, icon, onPress, active }) => (
  <Touchable cross='center' onPress={onPress}>
    <Icon name={icon} color={active ? 'text1' : 'background3'} />
    <Text color={active ? 'text1' : 'background3'} weight='700'>
      {title}
    </Text>
  </Touchable>
);

const BottomNavigator = () => {
  const [active, setActive] = useState<Active>(0);
  return (
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
      <View flex1 row main='space-between' pv='xs' ph='m'>
        <NavigatorIcon 
          title='Home' 
          icon='home' 
          active={active === 0}
          onPress={() => setActive(0)} 
        />
        <NavigatorIcon 
          title='Music' 
          icon='search' 
          active={active === 1}
          onPress={() => setActive(1)} 
        />
        <NavigatorIcon 
          title='Market' 
          icon='shoppingCart' 
          active={active === 2}
          onPress={() => setActive(2)} 
        />
        <NavigatorIcon 
          title='My page' 
          icon='accountCircle' 
          active={active === 3}
          onPress={() => setActive(3)} 
        />
      </View>
      <View h={34} />
    </View>
  );
}

export default BottomNavigator;
