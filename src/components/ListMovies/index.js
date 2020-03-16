import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export default function ListMovies({ sectionTitle, data }) {
  const navigation = useNavigation();

  return (
    <S.Container>
      {sectionTitle && <S.SectionTitle>{sectionTitle}</S.SectionTitle>}

      <S.List
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <S.Item onPress={() => navigation.push('Details', { id: item.id })}>
            <S.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w154${item.image}`,
              }}
            />
          </S.Item>
        )}
      />
    </S.Container>
  );
}
