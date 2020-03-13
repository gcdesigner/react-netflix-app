import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { API_KEY } from 'react-native-dotenv';
import api from '../../services/api';

// import * as S from './styles';

import LogoTitle from '../../components/LogoTitle';
import BannerHome from '../../components/BannerHome';
import ListMovies from '../../components/ListMovies';
import ListTrendMovies from '../../components/ListTrendMovies';

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function getPopular() {
      const respMovies = await api.get(
        `/movie/popular?api_key=${API_KEY}&page=1`
      );

      const respSeries = await api.get(`/tv/popular?api_key=${API_KEY}&page=1`);

      const respTrendMovies = await api.get(
        `/trending/movie/day?api_key=${API_KEY}&page=1`
      );

      setMovies(respMovies.data.results);
      setSeries(respSeries.data.results);
      setTrendMovies(respTrendMovies.data.results);
    }
    getPopular();
  }, []);

  return (
    <ScrollView
      automaticallyAdjustContentInsets="true"
      style={{ paddingTop: 0, marginHorizontal: 0 }}
    >
      <View>
        <LogoTitle />
        <BannerHome />
        <ListMovies sectionTitle="Filmes Populares" data={movies} />
        <ListTrendMovies sectionTitle="Lançcamentos" data={trendMovies} />
        <ListMovies sectionTitle="Séries populares" data={series} />
      </View>
    </ScrollView>
  );
}

Main.navigationOptions = {
  title: 'gabriel',
};
