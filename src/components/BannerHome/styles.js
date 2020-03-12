import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
`;

export const Image = styled.Image`
  position: relative;
  width: 100%;
  height: 450px;
`;

export const Actions = styled.View`
  position: absolute;
  width: 100%;
  bottom: 50px;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
`;

export const LogoMovie = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 250px;
  height: 100px;
  align-self: center;
  margin-bottom: 20px;
`;

export const BtnMyList = styled.TouchableOpacity`
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
`;

export const BtnWatch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 3px 15px;
  background: #fff;
  margin-top: 5px;
  border-radius: 3px;
  margin: 0 35px;
`;

export const BtnWatchText = styled.Text`
  color: #222;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

export const BtnKnowMore = styled.TouchableOpacity`
  align-items: center;
`;

export const BtnKnowMoreText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
`;
