import { View, Text } from '@components';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { ReplayButton } from './ReplayButton/ReplayButton';

export const Progress = () => (
  <View mb='s'>
    <Text mb='xxs' weight='700'>HP</Text>
    <View row cross='center'>
      <ProgressBar />
      <View mr='xxs' />
      <ReplayButton />
    </View>
  </View>
);
