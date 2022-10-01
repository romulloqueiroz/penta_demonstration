import { View, Text } from '@components';

export const Indicator = () => (
  <View
    h={32}
    w={178}
    bgc='background3'
    br='xxxl'
    row
    main='space-around'
    cross='center'
  >
    <View row>
      <View />
      <Text weight='700'>12</Text>
    </View>
    <View row>
      <View />
      <Text weight='700'>12</Text>
    </View>
    <View row>
      <View />
      <Text weight='700'>12</Text>
    </View>
  </View>
);
