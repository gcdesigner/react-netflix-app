import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  max-width: 100%;
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

export const TitleItem = styled.Text.attrs({
  numberOfLines: 2,
})`
  flex: 1;
  color: #fff;
  font-size: 16px;
  padding-right: 10px;
`;
