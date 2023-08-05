import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    alignItems: center;
`;

export const Action = styled.View`
`;

export const Row = styled.View`
  display: flex;
  flexDirection: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Item = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100px;
  height: 90px;
`;

export const Syllable = styled.View`
  border: 2px solid ${({ theme }) => theme.GRAY_COLOR};
  background: ${({ theme }) => theme.PALLETE01_COLOR};
  border-radius: 10px;
  padding: 15px 25px 20px 25px;
`;
