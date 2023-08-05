import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    alignItems: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.PALLETE03_COLOR};
    padding: 20px 0;
    margin-bottom: 20px;
    min-height: 100px;
`;

export const Item = styled.View`
  margin: 0 10px;
`;

export const Syllable = styled.View`
  border: 2px solid ${({ theme }) => theme.GRAY_COLOR};
  background: ${({ theme }) => theme.PALLETE01_COLOR};
  border-radius: 10px;
  padding: 15px 25px 20px 25px;
`;
