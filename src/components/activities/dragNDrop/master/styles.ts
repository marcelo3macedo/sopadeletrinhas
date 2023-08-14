import { isTablet } from '@helpers/SizeHelper';
import { styled } from 'styled-components/native';

export const Container = styled.View`
    
`;

export const Header = styled.View`
    padding: 0px;
`;

export const WordArea = styled.View`
    paddingBottom: 10px;
`;

export const BackArea = styled.View`
    margin-bottom: 20px;
    max-width: 50%;
    padding: 0 10px;
`;

export const Picture = styled.Image`
    display: flex;
    resizeMode: contain;
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    margin: 20px auto;

    
    ${isTablet() && `
        width: 200px;
        height: 200px;
        margin: 40px auto;
    `};
`;
