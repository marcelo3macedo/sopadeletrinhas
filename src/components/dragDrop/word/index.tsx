import React from 'react';
import { View } from 'react-native';
import Draggable from 'react-native-draggable';

const WordDragAndDrop = () => {
  return (
    <View >
        <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/> 
        <Draggable x={200} y={300} renderColor='red' renderText='B'/>
        <Draggable/>
    </View>
);
};

export default WordDragAndDrop;
