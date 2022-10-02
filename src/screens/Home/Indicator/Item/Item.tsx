import { Image, ImageSourcePropType } from 'react-native';
import { View, Text } from '@components';

export const Item: React.FC<{ image: ImageSourcePropType; }> = ({ image }) => (
  <View row cross='center'>
    <Image
      source={image}
      style={{ width: 24, height: 24 }} />
    <View mr='xxxs' />
    <Text weight='700'>12</Text>
  </View>
);
