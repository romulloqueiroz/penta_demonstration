import Icon from '@src/components/Icon/Icon';
import Text from '@src/components/Text/Text';
import Touchable from '@src/components/Touchable/Touchable';
import { IconType } from '@styles';

interface NavigatorIconProps {
  title: string;
  icon: IconType;
  onPress: () => void;
  active: boolean;
}
export const NavigatorIcon: React.FC<NavigatorIconProps> = ({ title, icon, onPress, active }) => (
  <Touchable cross='center' onPress={onPress}>
    <Icon name={icon} color={active ? 'text1' : 'background3'} />
    <Text color={active ? 'text1' : 'background3'} weight='700'>
      {title}
    </Text>
  </Touchable>
);
