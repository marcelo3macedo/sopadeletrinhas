import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  flex: 1;
  paddingTop: 24px;
  background: ${({ theme }) => theme.PALLETE01_COLOR};
`;

export const Child = styled.View`
  padding: 10px;
  flex: 1;
`;
