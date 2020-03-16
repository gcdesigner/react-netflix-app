import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin: 0 -4px;
`;

export const List = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 3 - 4.7}px;
  height: auto;
  border: 4px solid transparent;
`;

export const Image = styled.Image.attrs({
  sizeMode: 'cover',
})`
  width: 100%;
  height: 170px;
`;
