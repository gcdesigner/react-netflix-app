import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
`;

export const Image = styled.Image`
  margin-right: 10px;
  position: relative;
  z-index: 15;
`;

export const Nav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  text-align: right;
  position: relative;
  z-index: 15;
`;

export const Link = styled.TouchableOpacity`
  padding: 5px 20px;
`;

export const LinkText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
