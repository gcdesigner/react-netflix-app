import React from 'react';

import SearchHeader from '../../components/SearchHeader';
import ListSearch from '../../components/ListSearch';

import { Container } from './styles';

export default function Search({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Buscar',
      headerTitle: props => <SearchHeader {...props} />,
    });
  }, []);

  return (
    <Container>
      <ListSearch />
    </Container>
  );
}
