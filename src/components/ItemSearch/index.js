import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function ItemSearch({ title, image }) {
  return (
    <>
      <S.Container>
        <S.Imagem source={image} />
        <S.Meta>
          <S.TitleItem>{title}</S.TitleItem>
          <Icon name="play-arrow" size={30} color="#b2b2b2" />
        </S.Meta>
      </S.Container>
    </>
  );
}
