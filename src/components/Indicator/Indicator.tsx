import View from '@src/components/View/View';
import { Symbol1, Symbol2, Symbol3 } from '@images';
import { Item } from './Item/Item';

const Indicator = () => (
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

export default Indicator;
