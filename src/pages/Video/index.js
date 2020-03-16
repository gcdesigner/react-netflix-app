import React, { useCallback } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Orientation from 'react-native-orientation';

import VideoPlayer from '~/components/VideoPlayer';

import * as S from './styles';

export default function Video({ navigation }) {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setHidden(true);
      Orientation.lockToLandscape();
      return () => {
        StatusBar.setHidden(false);
        Orientation.lockToPortrait();
      };
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <VideoPlayer />
      </S.Container>
    </SafeAreaView>
  );
}
