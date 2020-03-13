import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

import bgHome from '../../assets/bg-home.png';
import logoMovie from '../../assets/logo-movie.png';

export default function BannerHome() {
  const gradientHeight = 100;
  const gradientBackground = '#1A191A';
  const data = Array.from({ length: gradientHeight });

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

          <S.BtnWatch>
            <Icon name="play" size={20} color="#222" />
            <S.BtnWatchText>Assistir</S.BtnWatchText>
          </S.BtnWatch>

          <S.BtnKnowMore>
            <Icon name="infocirlceo" size={20} color="#fff" />
            <S.BtnKnowMoreText>Saiba mais</S.BtnKnowMoreText>
          </S.BtnKnowMore>
        </View>
      </S.Actions>

      {data.map((_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            backgroundColor: gradientBackground,
            height: 1,
            bottom: gradientHeight - i,
            right: 0,
            left: 0,
            zIndex: 2,
            opacity: (1 / gradientHeight) * (i + 1),
          }}
        />
      ))}
    </S.Container>
  );
}
