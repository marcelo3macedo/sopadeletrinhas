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

export const Picture = styled.Image`
    display: flex;
    resizeMode: contain;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`;

export const Header = styled.View`
  padding-top: 40px;
`;

export const Content = styled.View`
  padding: 40px 0 0 0;
`;
