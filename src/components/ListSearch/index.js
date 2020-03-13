import React from 'react';
import { Text } from 'react-native';

import ItemSearch from '../ItemSearch';

import * as S from './styles';

import capa1 from '../../assets/capa1-h.jpg';
import capa2 from '../../assets/capa2-h.jpg';

const data = [
  { id: '0', title: 'Stars wars 5', image: capa1 },
  { id: '1', title: 'O último ato', image: capa2 },
  { id: '2', title: 'O último ato', image: capa1 },
  { id: '3', title: 'O último ato', image: capa2 },
  { id: '4', title: 'O último ato', image: capa1 },
  { id: '5', title: 'O último ato', image: capa2 },
  { id: '6', title: 'O último ato', image: capa1 },
  { id: '7', title: 'O último ato', image: capa2 },
  { id: '8', title: 'O último ato', image: capa1 },
];

export default function ListSearch() {
  return (
    <S.Container>
      <S.List
        ListHeaderComponent={props => <S.Title>Buscar populares</S.Title>}
        showsVerticalScrollIndicator={false}
        data={data}
        scroll
        renderItem={({ item }) => (
          <ItemSearch title={item.title} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </S.Container>
  );
}
