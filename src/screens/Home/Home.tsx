import { BasicLayout } from '@layouts';
import { View, Text, Button, Touchable, BottomNavigator, Indicator } from '@components';
import { Progress } from './Progress/Progress';
import { Card } from './Card/Card';
import { PlusCard } from './PlusCard/PlusCard';

const Home = () => (
  <>
    <BasicLayout ph='xs' bgc='background2'>
      <View row main='space-between' mb='m'>
        <Text type='large' weight='700'>Home</Text>
        <Indicator />
      </View>

      <View cross='center'>
        <Card type='large' />
        <View row w='100%' ph='xxs' main='space-between' mb='m'>
          <Card color='green' />
          <Card color='secondary' />
          <Card color='tertiary' />
          <PlusCard />
        </View>
      </View>

      <Progress />

      <Button 
        title='Start' 
        onPress={() => null}
        mb='s'
      />

      <Touchable onPress={() => null}>
        <Text color='text2' weight='700' center>
          How to Start?
        </Text>
      </Touchable>

    </BasicLayout>
    <BottomNavigator />
  </>
);

export default Home;
