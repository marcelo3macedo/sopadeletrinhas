import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    alignItems: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.PALLETE03_COLOR};
    padding: 20px 0px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 100px;
    border-radius: 20px;
    border: 2px dashed ${({ theme }) => theme.PRIMARY_COLOR};
`;

export const Item = styled.View`
  margin: 0 10px;
`;

export const Syllable = styled.View`
  border: 2px solid ${({ theme }) => theme.PRIMARY_COLOR};
  background: ${({ theme }) => theme.PALLETE04_COLOR};
  border-radius: 10px;
  padding: 15px 25px 20px 25px;
`;
