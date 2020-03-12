import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

import capa1 from '../../assets/capa1.jpg';
import capa2 from '../../assets/capa2.jpg';
import capa3 from '../../assets/capa3.jpg';
import capa4 from '../../assets/capa4.jpg';

const movies = [
  { id: '1', image: capa1 },
  { id: '2', image: capa2 },
  { id: '3', image: capa3 },
  { id: '4', image: capa4 },
];

export default function ListMovies({ sectionTitle }) {
  return (
    <S.Container>
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
      <S.List
        horizontal
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <S.Item>
            <S.Image source={item.image} />
          </S.Item>
        )}
      />
    </S.Container>
  );
}
