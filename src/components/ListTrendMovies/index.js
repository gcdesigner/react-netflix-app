import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

export default function ListTrendMovies({ sectionTitle, data }) {
  return (
    <S.Container>
      <S.Title>{sectionTitle}</S.Title>
      <S.List
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <S.Item>
            <S.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
          </S.Item>
        )}
      />
      <S.Actions>
        <S.Button color="#fff">
          <Icon name="play" size={20} color="#222" />
          <S.ButtonText color="#222">Assistir</S.ButtonText>
        </S.Button>

        <S.Button color="#333">
          <Icon name="plus" size={20} color="#fff" />
          <S.ButtonText color="#fff">Minha lista</S.ButtonText>
        </S.Button>
      </S.Actions>
    </S.Container>
  );
}
