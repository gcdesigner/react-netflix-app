import React from 'react';

import Gradient from '../Gradient';

import * as S from './styles';

import Logo from '~/assets/logotipo.png';

export default function HeaderHome() {
  return (
    <>
      <Gradient placement="top" />
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
