import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const SectionTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 0 10px;
`;

export const List = styled.FlatList`
  padding: 0 4px;
`;

export const Item = styled.TouchableOpacity`
  margin: 0 6px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 250px;
`;
