import React from 'react';
import { View } from 'react-native';

export default function Gradient({ placement }) {
  const gradientHeight = 100;
  const gradientBackground = '#1A191A';
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
            top: placement ? gradientHeight - i - 10 : null,
            bottom: !placement ? gradientHeight - i - 1 : null,
            right: 0,
            left: 0,
            zIndex: 2,
            opacity: (1 / gradientHeight) * (i + 0.1),
          }}
        />
      ))}
    </>
  );
}
