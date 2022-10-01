import { View, Text } from '@components';

export const Progress = () => (
  <View mb='s'>
    <Text mb='xxs' weight='700'>HP</Text>
    <View row cross='center'>
      <View h={12} flex1 bgc='background3' br='xs' />
      <View mr='xxs' />
      <View round={26} bgc='text1' />
    </View>
  </View>
);
