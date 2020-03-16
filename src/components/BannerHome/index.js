import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import Gradient from '../Gradient';

import bgHome from '~/assets/bg-home.png';
import logoMovie from '~/assets/logo-movie.png';

export default function BannerHome() {
  const navigation = useNavigation();

  function handlePlayMovie() {
    navigation.navigate('Video');
  }

  return (
    <S.Container>
      <S.Image source={bgHome} />
      <S.Actions>
        <S.LogoMovie source={logoMovie} />
        <View style={{ flexDirection: 'row' }}>
          <S.BtnMyList>
            <Icon name="plus" size={20} color="#fff" />
            <S.BtnText>Minha lista</S.BtnText>
          </S.BtnMyList>

          <S.BtnWatch onPress={handlePlayMovie}>
            <Icon name="play" size={20} color="#222" />
            <S.BtnWatchText>Assistir</S.BtnWatchText>
          </S.BtnWatch>

          <S.BtnKnowMore>
            <Icon name="infocirlceo" size={20} color="#fff" />
            <S.BtnKnowMoreText>Saiba mais</S.BtnKnowMoreText>
          </S.BtnKnowMore>
        </View>
      </S.Actions>

      <Gradient />
    </S.Container>
  );
}
