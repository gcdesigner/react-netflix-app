import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';

import SimilarMovies from '~/components/SimilarMovies';

import * as S from './styles';

export default function TabsDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const borderWidth = new Animated.Value(0);

  Animated.timing(borderWidth, {
    toValue: 300,
    duration: 300,
  }).start();

  const tabs = [
    {
      id: 0,
      name: 'OPÇÕES SEMELHANTES',
    },
    {
      id: 1,
      name: 'TRAILERS E MAIS',
    },
  ];

  return (
    <S.Container>
      <S.Tabs>
        {tabs.map(tab => (
          <S.Tab key={tab.id} onPress={() => setActiveTab(tab.id)}>
            {activeTab === tab.id && (
              <S.BorderActive style={{ width: borderWidth }} />
            )}
            <S.TabName active={activeTab === tab.id}>{tab.name}</S.TabName>
          </S.Tab>
        ))}
      </S.Tabs>

      {activeTab === 0 ? (
        <S.TabContent active={activeTab === 0}>
          <SimilarMovies />
        </S.TabContent>
      ) : (
        <S.TabContent>
          <View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              To do
            </Text>
          </View>
        </S.TabContent>
      )}
    </S.Container>
  );
}
