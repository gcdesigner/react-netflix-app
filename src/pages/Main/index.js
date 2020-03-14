import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { API_KEY } from 'react-native-dotenv';
import api from '../../services/api';

// import * as S from './styles';

import LogoTitle from '../../components/LogoTitle';
import BannerHome from '../../components/BannerHome';
import ListMovies from '../../components/ListMovies';
import ListTrendMovies from '../../components/ListTrendMovies';

export default function Main({ navigation }) {
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
        `/movie/upcoming?api_key=${API_KEY}&page=1&total_results=1`
      );

      const lancamento = respTrendMovies.data.results.filter(
        (i, index) => index === 1
      );

      setMovies(respMovies.data.results);
      setSeries(respSeries.data.results);
      setTrendMovies(lancamento);
      console.tron.log(
        respTrendMovies.data.results.filter((i, index) => index === 1)
      );
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
        <ListMovies
          sectionTitle="Filmes Populares"
          data={movies}
          navigation={navigation}
        />
        <ListTrendMovies
          sectionTitle="Lançamento da semana"
          data={trendMovies}
        />
        <ListMovies sectionTitle="Séries populares" data={series} />
      </View>
    </ScrollView>
  );
}

Main.navigationOptions = {
  title: 'gabriel',
};
