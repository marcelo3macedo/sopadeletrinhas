import { TitleText } from '@components/elements/texts/title';
import React from 'react';
import { Item, Syllable, Wrapper } from './styles';

const WordArea = ({ syllables }:any) => {
  return (
    <Wrapper>
      { syllables.map((b:any, i:number) => (
        <Item key={i}>
          <Syllable>
            <TitleText value={b} />
          </Syllable>
        </Item>
      ))}
    </Wrapper>
  );
};

export default WordArea;
