import { TitleText } from '@components/elements/texts/title';
import { sliceIntoBlocks } from '@helpers/ImageHelper';
import { Styles } from '@interfaces/texts/FontProps';
import React from 'react';
import Draggable from 'react-native-draggable';
import { Item, Row, Syllable, Wrapper } from './styles';

const Options = ({ options, action }:any) => {
  if (!options) {return;}

  const minDrag = -50;
  const blockSize = options.length > 4 ? 3 : 2;
  const blocks = sliceIntoBlocks(options, blockSize);

  function handleDropIn(gestureState:any, value:string) {
    const { dy } = gestureState;

    if (dy > minDrag) {return;}

    action(value);
  }

  return (
    <Wrapper>
      { blocks.map((b:any, i:number) => (
        <Row key={i}>
          { b.map((e:any, j:number) => (
              <Item key={j}>
                <Draggable shouldReverse onDragRelease={(_event, gestureState) => { handleDropIn(gestureState, e); }}>
                  <Syllable>
                    <TitleText value={e} styled={Styles.Huge} />
                  </Syllable>
                </Draggable>
              </Item>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Options;
