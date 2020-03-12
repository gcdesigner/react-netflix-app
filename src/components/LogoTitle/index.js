import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

import Logo from '../../assets/logotipo.png';

export default function LogoTitle() {
  const gradientHeight = 120;
  const gradientBackground = '#222';
  const data = Array.from({ length: gradientHeight });

  return (
    <>
      {data.map((_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            backgroundColor: gradientBackground,
            height: 1,
            top: gradientHeight - i - 1,
            right: 0,
            left: 0,
            zIndex: 2,
            opacity: (1 / gradientHeight) * (i + 1),
          }}
        />
      ))}

      <S.Container>
        <S.Image source={Logo} style={{ width: 50, height: 50 }} />
        <S.Nav>
          <S.Link>
            <S.LinkText>Séries</S.LinkText>
          </S.Link>
          <S.Link>
            <S.LinkText>Filmes</S.LinkText>
          </S.Link>
          <S.Link>
            <S.LinkText>Minha lista</S.LinkText>
          </S.Link>
        </S.Nav>
      </S.Container>
    </>
  );
}
