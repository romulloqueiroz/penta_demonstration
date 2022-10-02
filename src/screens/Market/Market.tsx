import React from 'react';
import { BasicLayout } from '@layouts';
import { Text, View, Indicator, BottomNavigator, Scroll, Gradient, Touchable } from '@components';
import { Selector } from './Selector/Selector';

const Card = () => (
  <Touchable w={167} h={207} s={1} br='xs' style={{ overflow: 'hidden' }}>
    <Gradient>

    </Gradient>
  </Touchable>
)

const Market = () => {
  return (
    <>
      <BasicLayout ph='xs' bgc='background2'>
        <Scroll hideIndicator>

          <View row main='space-between' mb='m'>
            <Text type='large' weight='700'>Market</Text>
            <Indicator />
          </View>
          <Selector />

          <View w='100%' h={800} bw={2}>
            <Card />
          </View>

        </Scroll>
      </BasicLayout>
      <BottomNavigator />
    </>
  )
}

export default Market;
