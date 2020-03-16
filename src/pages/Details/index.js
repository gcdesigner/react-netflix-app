import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailRequest, similarRequest } from '~/store/modules/detail/actions';

import { SafeAreaView, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import api from '~/services/api';
import { API_KEY, IMG_URL } from 'react-native-dotenv';

import * as S from './styles';

import Loading from '~/components/Loading';
import Gradient from '~/components/Gradient';
import TabsDetails from '~/components/TabsDetails';

export default function Details(props) {
  const movie_id = props.route.params.id;

  const dispatch = useDispatch();
  const loading = useSelector(state => state.detail.loading);
  const details = useSelector(state => state.detail.item);

  useEffect(() => {
    dispatch(detailRequest(movie_id));
    dispatch(similarRequest(movie_id));
  }, []);

  function handlePlayVideo() {
    props.navigation.navigate('Video');
  }

  return (
    <>
      {loading && <Loading />}
      <ScrollView
        automaticallyAdjustContentInsets="true"
        style={{ paddingTop: 0, marginHorizontal: 0 }}
      >
        <S.Container>
          <Gradient placement="top" />
          <S.WrapperImage onPress={handlePlayVideo}>
            <Icon
              name="playcircleo"
              size={70}
              color="#fff"
              style={{ position: 'relative', zIndex: 3 }}
            />
            <S.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w300${details.backdrop_path}`,
              }}
            />
            <Gradient />
          </S.WrapperImage>

          <S.Details>
            <S.Title>{details.original_title}</S.Title>

            <S.Meta>
              <S.Relevant>95% relevante</S.Relevant>
              <S.year>2020</S.year>
              <S.age>18</S.age>
              <S.Seasons>3 Temporadas</S.Seasons>
            </S.Meta>

            <S.TopIconWrapper>
              <S.Top10Icon>
                <S.TopIconText>TOP</S.TopIconText>
                <S.NumberTen>10</S.NumberTen>
              </S.Top10Icon>
              <S.TopText>Top 3 de hoje no Brasil</S.TopText>
            </S.TopIconWrapper>

            <S.Desciption>{details.overview}</S.Desciption>

            <S.Crew>
              <Text style={{ fontWeight: 'bold' }}>Elenco: </Text>
              <Text>Mark Wahlberg, Winston Duke, Alan Arkin</Text>
            </S.Crew>

            <S.Director>
              <Text style={{ fontWeight: 'bold' }}>Elenco: </Text>
              <Text>Mark Wahlberg, Winston Duke, Alan Arkin</Text>
            </S.Director>
          </S.Details>

          <S.ActionArea>
            <S.BtnAction>
              <Icon name="plus" size={25} color="#fff" />
              <S.BtnActionText>Minha lista</S.BtnActionText>
            </S.BtnAction>

            <S.BtnAction>
              <Icon name="like2" size={25} color="#fff" />
              <S.BtnActionText>Classifique</S.BtnActionText>
            </S.BtnAction>

            <S.BtnAction>
              <Icon name="sharealt" size={25} color="#fff" />
              <S.BtnActionText>Compartilhe</S.BtnActionText>
            </S.BtnAction>

            <S.BtnAction>
              <Icon name="download" size={25} color="#fff" />
              <S.BtnActionText>Baixar</S.BtnActionText>
            </S.BtnAction>
          </S.ActionArea>

          <TabsDetails />
        </S.Container>
      </ScrollView>
    </>
  );
}
