import { styled } from 'styled-components/native';

export const Wrapper = styled.View`
    padding: 5px;
`;

export const Content = styled.View`
    border: 1px solid ${({ theme }) => theme.PALLETE01_COLOR};
    background: ${({ theme }) => theme.PALLETE01_COLOR};
    border-radius: 20px;
    padding: 15px;
`;

export const Picture = styled.Image`
    display: flex;
    resizeMode: contain;
    width: 150px;
    height: 150px;
`;
