import { BasicLayout } from '@layouts';
import { View, Text, Button, Touchable, BottomNavigator } from '@components';
import { Indicator } from './Indicator/Indicator';
import { Progress } from './Progress/Progress';

const Home = () => (
  <>
    <BasicLayout ph='xs' bgc='background2'>
      <View row main='space-between' mb='m'>
        <Text type='large' weight='700'>Home</Text>
        <Indicator />
      </View>

      <View cross='center'>
        <View w={184} h={168} bgc='background1' mb='s' />
        <View row w='100%' ph='xxs' main='space-between' mb='m'>
          <View h={70} w={70} bgc='background1' />
          <View h={70} w={70} bgc='background1' />
          <View h={70} w={70} bgc='background1' />
          <View h={70} w={70} bgc='background1' />
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