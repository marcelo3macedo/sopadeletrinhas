import { isTablet } from '@helpers/SizeHelper';
import { styled } from 'styled-components/native';

export const Picture = styled.Image`
    display: flex;
    resize-mode: contain;
    width: 100px;
    height: 60px;

    ${isTablet() &&
        `
        width: 150px;
        height: 80px;
    `}
`;
