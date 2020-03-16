import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { searchRequest } from '~/store/modules/search/actions';
import { TouchableOpacity } from 'react-native';

import * as S from './styles';

export default function SearchHeader() {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const [input, setInput] = useState('');

  useEffect(() => {
    inputRef.current.focus();
    dispatch(searchRequest(input));
  }, [input]);

  function handleClearInput() {
    setInput('');
  }

  return (
    <S.Container>
      <Icon name="search" size={22} color="#b2b2b2" />
      <S.Input
        ref={inputRef}
        placeholder="Buscar por séire, filme, gênero, etc."
        value={input}
        onChangeText={setInput}
      />
      {input.length ? (
        <TouchableOpacity onPress={handleClearInput}>
          <Icon name="clear" size={22} color="#b2b2b2" />
        </TouchableOpacity>
      ) : (
        <Icon name="mic" size={22} color="#b2b2b2" />
      )}
    </S.Container>
  );
}
