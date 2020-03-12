import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// import * as S from './styles';

import LotoTitle from '../../components/LogoTitle';
import BannerHome from '../../components/BannerHome';
import ListMovies from '../../components/ListMovies';

export default function Main() {
  return (
    <ScrollView
      automaticallyAdjustContentInsets="true"
      style={{ paddingTop: 0, marginHorizontal: 0 }}
    >
      <View>
        <LotoTitle />
        <BannerHome />
        <ListMovies sectionTitle="Embarque na ação" />
        <ListMovies sectionTitle="Continuar assistindo como Gabriel" />
      </View>
    </ScrollView>
  );
}

Main.navigationOptions = {
  title: 'gabriel',
};
