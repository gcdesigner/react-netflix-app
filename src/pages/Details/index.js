import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

import imagem from '../../assets/bg-home.png';

export default function Details({ route }) {
  console.tron.log(route.params.id);

  return (
    <S.Container>
      <S.WrapperImage>
        <Icon
          name="playcircleo"
          size={70}
          color="#fff"
          style={{ position: 'relative', zIndex: 3 }}
        />
        <S.Image source={imagem} />
      </S.WrapperImage>

      <S.Details>
        <S.Title>30 minutos ou menos</S.Title>

        <S.Meta>
          <S.Relevant>95% relevante</S.Relevant>
          <S.year>2020</S.year>
          <S.age>18</S.age>
          <S.Seasons>3 Temporadas</S.Seasons>
        </S.Meta>

        <S.TopIconWrapper>
          <S.Top10Icon>
            <S.TopIconText>TOP</S.TopIconText>
            <S.NumberTen>10</S.NumberTen>
          </S.Top10Icon>
          <S.TopText>Top 3 de hoje no Brasil</S.TopText>
        </S.TopIconWrapper>

        <S.Desciption>
          Spenser, um ex-policial e ex-presidiário, e o aspirante a lutador
          Hanwk se unem para investigar uma conspitação ligada à morte de dois
          oficias de Boston.
        </S.Desciption>

        <S.Crew>
          <Text style={{ fontWeight: 'bold' }}>Elenco: </Text>
          <Text>Mark Wahlberg, Winston Duke, Alan Arkin</Text>
        </S.Crew>

        <S.Director>
          <Text style={{ fontWeight: 'bold' }}>Elenco: </Text>
          <Text>Mark Wahlberg, Winston Duke, Alan Arkin</Text>
        </S.Director>
      </S.Details>
    </S.Container>
  );
}
