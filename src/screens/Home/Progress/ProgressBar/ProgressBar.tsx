import { View, Gradient } from '@components';
import BarInner from './BarInner';

export const ProgressBar = () => (
  <>
    <View h={12} w='100%' flex1 bgc='background3' br='xs' s={1} style={{ padding: 2, overflow: 'hidden' }}>
      <View style={{ overflow: 'hidden' }} w='100%' h='100%' br='xs'>
        <Gradient br='s'>
        </Gradient>
      </View>
    </View>
    <BarInner w={257} />
  </>
);
