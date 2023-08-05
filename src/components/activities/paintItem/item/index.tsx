import { getImageFromSlug } from '@helpers/AnimalsHelper';
import { resizeImage } from '@helpers/ImageHelper';
import React from 'react';
import { Image } from 'react-native';
import { ScratchCard } from 'rn-scratch-card';
import { Container, Picture } from './styles';

export function ItemScratch({ animal, action = null }:any) {
  const newWidth = 150;
  const origin = getImageFromSlug(`${animal}_black`);
  const destiny = getImageFromSlug(animal);

  function handleScratch(scratchPercentage: number) {
      if (scratchPercentage > 50) {
          action(animal);
      }
  }

  const { width: originalWidth, height: originalHeight } = Image.resolveAssetSource(origin);
  const { width, height } = resizeImage({ originalWidth, originalHeight, newWidth  });
  return (
      <Container>
        <Picture source={destiny} width={width} height={height} />
        <ScratchCard
          source={origin}
          brushWidth={25}
          onScratch={handleScratch}
          style={{ width: width, height: height, backgroundColor: 'transparent'}}
        />
      </Container>
  );
}
