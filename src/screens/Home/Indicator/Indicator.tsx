import { View } from '@components';
import { Symbol1, Symbol2, Symbol3 } from '@images';
import { Item } from './Item/Item';

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
    <Item image={Symbol1} />
    <Item image={Symbol2} />
    <Item image={Symbol3} />
  </View>
);
