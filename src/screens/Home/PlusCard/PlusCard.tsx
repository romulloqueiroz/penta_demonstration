import { Icon, Touchable } from '@components';
import { colors } from '@styles';

interface PlusCardProps {
  onPress?: () => void;
}

export const PlusCard: React.FC<PlusCardProps> = ({ onPress }) => (
  <Touchable
    bw={1}
    w={70}
    h={70}
    style={{ borderColor: colors.text3, borderStyle: 'dashed' }}
    main='center'
    cross='center'
    br='xxs'
    onPress={onPress}
  >
    <Icon name='add' size={24} color='text3' />
  </Touchable>
);
