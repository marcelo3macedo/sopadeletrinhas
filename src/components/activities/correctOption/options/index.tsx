import { AnimalImage } from '@components/elements/images/animal';
import { getImageFromSlug } from '@helpers/AnimalsHelper';
import React from 'react';
import { FlatList } from 'react-native';
import { Action, Wrapper } from './styles';

const Options = ({ options, action }:any) => {
  function selectItem(item:any) {
    action(item);
  }

  return (
    <Wrapper>
      <FlatList
        data={options}
        keyExtractor={(_item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Action key={index}>
              <AnimalImage source={getImageFromSlug(item.image)} action={() => { selectItem(item.value); }} />
          </Action>
        )}
      />
    </Wrapper>
  );
};

export default Options;
