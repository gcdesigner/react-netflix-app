import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
  width: ${Dimensions.get('window').width}px;
  background: #333;
  padding: 0 20px;
  margin: 0 -15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#b2b2b2',
})`
  align-self: center;
  flex: 1;
  font-size: 14px;
  margin: 0 16px;
  color: #fff;
`;
