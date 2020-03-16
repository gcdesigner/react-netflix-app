import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

import ItemSearch from '../ItemSearch';

import * as S from './styles';

export default function ListSearch({ input, items }) {
  const loading = useSelector(state => state.search.loading);

  return (
    <>
      {loading && <Loading />}
      <S.Container>
        <S.List
          ListHeaderComponent={props => (
            <S.Title>
              Buscas por{' '}
              {input === null || !input.length ? 'populares' : `${input}`}
            </S.Title>
          )}
          showsVerticalScrollIndicator={false}
          data={items}
          scroll
          renderItem={({ item }) => <ItemSearch data={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </S.Container>
    </>
  );
}
