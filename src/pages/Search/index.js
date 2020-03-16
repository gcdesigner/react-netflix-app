import React from 'react';
import { useSelector } from 'react-redux';

import ListSearch from '~/components/ListSearch';

import { Container } from './styles';

export default function Search() {
  const input = useSelector(state => state.search.input);
  const items = useSelector(state => state.search.items);

  return (
    <Container>
      <ListSearch input={input} items={items} />
    </Container>
  );
}
