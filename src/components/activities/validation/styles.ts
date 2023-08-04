import { StyleSheet } from 'react-native';
import { styled } from 'styled-components/native';

export const style = StyleSheet.create({
    animations: {
      aspectRatio: 1,
      width: 140,
    },
});

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;
