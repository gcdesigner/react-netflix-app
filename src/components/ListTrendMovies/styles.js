import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
`;

export const List = styled.FlatList`
  padding: 10px 5px 20px;
`;

export const Item = styled.TouchableOpacity`
  margin: 0 4px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  align-self: stretch;
  width: ${Dimensions.get('window').width - 20}px;
  height: 200px;
  border-radius: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background: ${props => props.color};
  margin: 0 10px;
  border-radius: 4px;
  flex: 1;
  padding: 10px 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;
