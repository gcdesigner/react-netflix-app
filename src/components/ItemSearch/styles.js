import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background: #21201e;
  margin-bottom: 2px;
`;

export const Imagem = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 125px;
  height: 80px;
`;

export const Meta = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 10px;
`;

export const TitleItem = styled.Text`
  color: #fff;
  font-size: 16px;
`;
