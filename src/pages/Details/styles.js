import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const WrapperImage = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: ${Dimensions.get('window').width}px;
  height: 250px;
`;

export const Details = styled.View`
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Meta = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const Relevant = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #60c277;
`;
export const year = styled.Text`
  font-size: 12px;
  color: #aaa;
  margin: 0 10px;
`;

export const age = styled.Text`
  background: #dc2432;
  padding: 3px 5px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`;
export const Seasons = styled.Text`
  color: #aaa;
  font-size: 12px;
`;

export const TopIconWrapper = styled.View`
  flex-direction: row;
`;

export const Top10Icon = styled.View`
  border: 2px solid #fff;
  padding: 2px 4px;
  text-align: center;
  margin-right: 10px;
`;

export const TopIconText = styled.Text`
  color: #fff;
  font-size: 8px;
  font-weight: bold;
  margin-bottom: -5px;
`;
export const NumberTen = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
export const TopText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Desciption = styled.Text`
  color: #ccc;
  font-size: 16px;
  line-height: 22px;
  padding: 10px 0;
`;

export const Crew = styled.Text`
  color: #ccc;
`;

export const Director = styled.Text`
  color: #ccc;
`;

export const ActionArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0;
`;

export const BtnAction = styled.TouchableOpacity`
  max-width: 25%;
  margin: 0 20px;
  align-items: center;
  text-align: center;
`;

export const BtnActionText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
`;
