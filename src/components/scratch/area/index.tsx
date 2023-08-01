import { TitleText } from '@components/elements/texts/title';
import { sliceIntoBlocks } from '@helpers/ImageHelper';
import React from 'react';
import { ItemScratch } from '../item';
import { Container, Header, Items, Row } from './styles';

export function AreaScratch({ elements }:any) {
  const blockSize = 2;
  const blocks = sliceIntoBlocks(elements, blockSize);
  
  return (
      <Container>
        <Header>
          <TitleText value={'Pinte o animal que começa com:'} />
          <TitleText value={'ABE'} />
        </Header>
        { blocks.map((b:any, i:number) => (
          <Row key={i}>
            { b.map((e:any, i:number) => (
              <Items key={i}>
                <ItemScratch originImage={e.origin} destinyImage={e.destiny} />
              </Items>
            ))}
          </Row>
        ))}        
      </Container>
  );
}
