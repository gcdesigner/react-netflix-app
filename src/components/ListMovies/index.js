import React from 'react';

import * as S from './styles';

export default function ListMovies({ sectionTitle, data }) {
  return (
    <S.Container>
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
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
    </S.Container>
  );
}
