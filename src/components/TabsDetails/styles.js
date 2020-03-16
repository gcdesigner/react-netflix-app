import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  border: 1px solid #111;
  padding: 0 10px;
`;

export const Tabs = styled.View`
  flex-direction: row;
`;

export const Tab = styled.TouchableOpacity`
  position: relative;
  max-width: 200px;
  margin-right: 20px;
  padding: 15px 0;
  overflow: hidden;
`;

export const BorderActive = styled(Animated.View)`
  position: absolute;
  top: 0;
  height: 3px;
  background: #dc2432;
`;

export const TabName = styled.Text`
  color: ${props => (props.active ? '#fff' : '#aaa')};
  font-size: 14px;
  font-weight: bold;
`;

export const TabContent = styled.View``;
