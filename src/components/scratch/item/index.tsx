import { resizeImage } from '@helpers/ImageHelper';
import React from 'react';
import { Image } from 'react-native';
import { ScratchCard } from 'rn-scratch-card';
import { Container, Picture } from './styles';

export function ItemScratch({ originImage, destinyImage, action = null }:any) {
  const newWidth = 150;

  function handleScratch(scratchPercentage: number) {
      if (scratchPercentage > 30) {
          //action();
      }
  }

  const { width: originalWidth, height: originalHeight } = Image.resolveAssetSource(originImage);
  const { width, height } = resizeImage({ originalWidth, originalHeight, newWidth  });
  return (
      <Container>
        <Picture source={destinyImage} width={width} height={height} />
        <ScratchCard
          source={originImage}
          brushWidth={25}
          onScratch={handleScratch}
          style={{ width: width, height: height, backgroundColor: 'transparent'}}
        />
      </Container>
  );
}
