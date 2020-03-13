import React, { useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export default function SearchHeader({ navigation }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.Container>
      <Icon name="search" size={22} color="#b2b2b2" />
      <S.Input
        ref={inputRef}
        placeholder="Buscar por séire, filme, gênero, etc."
      />
      <Icon name="mic" size={22} color="#b2b2b2" />
    </S.Container>
  );
}
