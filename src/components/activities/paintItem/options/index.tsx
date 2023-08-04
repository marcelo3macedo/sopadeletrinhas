import { sliceIntoBlocks } from '@helpers/ImageHelper';
import React from 'react';
import { ItemScratch } from '../item';
import { Items, Row, Wrapper } from './styles';

const Options = ({ options }:any) => {
  const blockSize = 2;
  const blocks = sliceIntoBlocks(options, blockSize);

  function selectItem(item:any) {
    console.log(item);
  }

  return (
    <Wrapper>
      { blocks.map((b:any, i:number) => (
        <Row key={i}>
          { b.map((e:any, j:number) => (
            <Items key={j}>
              <ItemScratch animal={e.animal} action={selectItem} />
            </Items>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Options;
