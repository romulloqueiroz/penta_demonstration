import { Touchable, Gradient, Earphone, View } from '@components';
import { SpacingType, GradientType } from '@styles';

interface CardProps {
  type?: 'large' | 'small';
  color?: GradientType;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ type = 'small', color = 'primary', onPress }) => (
  <View s={1}>
    <Touchable
      onPress={onPress}
      w={type === 'large' ? 184 : 70}
      h={type === 'large' ? 168 : 70}
      mb='s'
      br={type === 'large' ? 'xs' : 'xxs'}
      style={{ 
        overflow: 'hidden'
      }}
    >
      <Gradient 
        br={type === 'large' ? 's' : 'xxs'}
        type='black'
        style={{ 
          overflow: 'hidden',
          padding: type === 'large' ? 2 : 1
        }}
      >
        <Gradient
          row
          main='center'
          cross='center'
          type='black2'
        >
          <Earphone 
            type={color}
            h={type === 'large' ? 140 : 56}
            w={type === 'large' ? 140 : 56}
          />
        </Gradient>
      </Gradient>
    </Touchable>
  </View>
);
