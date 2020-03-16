import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadGenresRequest,
  loadMoviesRequest,
} from '~/store/modules/home/actions';
import { View, ScrollView } from 'react-native';

import Loading from '~/components/Loading';
import HeaderHome from '~/components/HeaderHome';
import BannerHome from '~/components/BannerHome';
import ListMovies from '~/components/ListMovies';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenresRequest());

    // I need to implement this method and get a list of movies by each genre
    dispatch(loadMoviesRequest(28));
  }, []);

  const loading = useSelector(state => state.home.loading);
  const genres = useSelector(state => state.home.genres);
  const items = useSelector(state => state.home.items);

  return (
    <>
      {loading && <Loading />}
      <ScrollView
        automaticallyAdjustContentInsets="true"
        style={{ paddingTop: 0, marginHorizontal: 0 }}
      >
        <View>
          <HeaderHome />

          <BannerHome />

          {genres.map(genre => (
            <ListMovies
              key={genre.name}
              sectionTitle={`Filmes de ${genre.name}`}
              data={items.filter(i => i.genre.includes(genre.id))}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
