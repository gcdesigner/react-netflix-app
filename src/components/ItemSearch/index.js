import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function ItemSearch({ data }) {
  const navigation = useNavigation();

  return (
    <>
      <S.Container
        onPress={() => navigation.navigate('Details', { id: data.id })}
      >
        <S.Imagem
          source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }}
        />
        <S.Meta>
          <S.TitleItem>{data.title}</S.TitleItem>
          <Icon name="play-arrow" size={30} color="#b2b2b2" />
        </S.Meta>
      </S.Container>
    </>
  );
}
