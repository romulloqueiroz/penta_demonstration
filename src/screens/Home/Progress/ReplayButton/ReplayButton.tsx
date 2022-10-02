import { Gradient, Icon, Touchable } from '@components';

export const ReplayButton = () => (
  <Touchable
    round={26}
    bgc='text1'
    style={{ overflow: 'hidden' }}
    s={1}
  >
    <Gradient
      main='center'
      cross='center'
      type='black'
    >
      <Icon name='replay' style={{ marginLeft: 5, marginTop: 5 }} />
    </Gradient>
  </Touchable>
);
