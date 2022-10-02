import { Image } from 'react-native';
import { BasicLayout } from '@layouts';
import { PentaLogo } from '@images';
import { useNavigation } from '@hooks';
import { View, Button } from '@components';

const FirstView = () => {
	const navigation = useNavigation();
  return (
    <BasicLayout main='center' cross='center' ph='xs'>
      <Image
        source={PentaLogo}
        style={{ width: 247, height: 216 }}
      />
      <View mb='xxxl' />
      <View mb='xl' />
      <Button 
        title='Start' 
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </BasicLayout>
  );
}

export default FirstView;