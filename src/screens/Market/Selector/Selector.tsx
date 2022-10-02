import React from 'react';
import { Text, Touchable } from '@components';

export const Selector = () => (
  <Touchable
    bw={2}
    p='xs'
    bc='text1'
    br='xxxl'
    row
    main='center'
    cross='center'
    bgc='background3'
    mb='xs'
  >
    <Text weight='700'>Highest Rarity</Text>
  </Touchable>
);
