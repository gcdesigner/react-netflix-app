import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { IMG_URL } from 'react-native-dotenv';

import * as S from './styles';

export default function SimilarMovies() {
  const items = useSelector(state => state.detail.similars);
  const navigation = useNavigation();

  function getItem(data, index) {
    return data.getElementAtIndex(index);
  }

  function getItemCount(data) {
    return 10;
  }

  return (
    <S.Container>
      <S.List>
        {items.map(item => (
          <S.Item
            key={item.id}
            onPress={() => navigation.push('Details', { id: item.id })}
          >
            <S.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w154${item.poster_path}`,
              }}
            />
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
}
