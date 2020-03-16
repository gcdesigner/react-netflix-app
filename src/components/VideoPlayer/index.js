import React, { useState, useRef } from 'react';

import * as S from './styles';

import videoTest from '~/assets/video.mp4';

export default function VideoPlayer() {
  const videoRef = useRef();

  const [videoSettings] = useState({
    currentTime: 0,
    duration: 0.1,
    paused: true,
    overlay: false,
    orientation: 'landscape',
  });

  function onLoad(params) {
    params.orientation = 'portrait';
  }

  function navigators(params) {
    console.log(params);
  }

  return (
    <S.Container>
      <S.VideoPlayer
        source={videoTest}
        paused={videoSettings.paused}
        resizeMode={'cover'}
        navigator={navigators}
        controls={true}
        ref={videoRef}
        // onLoad={onLoad}
        // onProgress={props.progress}
        // onBuffer={this.onBuffer}
        // onError={this.videoError}
      />
    </S.Container>
  );
}
