import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Video from 'react-native-video';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background: red;
  z-index: 50000;
`;

export const VideoPlayer = styled(Video)`
  position: absolute;
  elevation: 10;
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background: #000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 50000;
`;
